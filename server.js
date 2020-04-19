const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mysql = require('mysql');
const mc = mysql.createPool({
    host: 'mysql-ait.stud.idi.ntnu.no',
    user: 'g_dcst1008_3',
    password: '0u2ytjnl',
    database: 'g_dcst1008_3'
});




app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser())
app.get('/ping', function (req, res) {
  var pong;
mc.query('SELECT username FROM users', function(err, results, fields) {
  if(err) throw err;
  pong=results;
   return res.send(results);
});




});

app.get('/gamelist/:id', function (req, res) {

    mc.query(`SELECT * FROM users WHERE id = ?`, [req.params.id], function(err, results, fields) {
      if(err) throw err;
      console.log(results, req.headers.password);
      if (results.length>0) {
        if (results[0].password == req.headers.password) {

          mc.query('SELECT * FROM scoreboards WHERE player=? ORDER BY date desc', [req.params.id], function(err, results3, fields) {
            if(err) throw err;

            return res.send(200, results3);
          })

        } else {
          return res.sendStatus(401);
        }
      } else {
        return res.sendStatus(401);
      }


    })
})
/*
app.post('/gamelist/:id', (req, res) => {
  console.log("passord", req.params.id);
  mc.query(`INSERT INTO scoreboards (player) VALUES (?)`, [req.params.id], function(err, results, fields) {
    if(err) throw err;


  })


});*/
app.post('/changePassword/:id', function(req, res) {
  console.log("body", req.body);
  var id = req.params.id;
  var newPassword = req.body.password;
  console.log(typeof(id), typeof(newPassword));

  mc.query(`UPDATE users SET password = ? WHERE id = ?`, [newPassword, id], function(err, results, fields){
    if(err) throw err;
    console.log("password updated");
    mc.query(`SELECT * from users WHERE id = ?`, [id], function(err, results, fields){
      console.log(results);
      if(err) throw err;
      console.log(results[0]);
      res.status(200).cookie('user', results[0]).json({
            success:true,
            redirectUrl: `../gamelist/${results[0].id}`
        });
    })

  })

  console.log("Updated password", req.body);

})
app.put('/gamelist/:id', function(req, res) {
  var d = new Date();
  console.log(typeof(d.getTime()));
  var id = req.params.id;
  var identifier = req.body.field;
  console.log("body.field:", req.body.field, typeof(req.body.field));
  mc.query(`INSERT INTO scoreboards (player, date) VALUES (?, ?)`, [req.params.id, d.getTime()], function(err, results, fields){
    if(err) throw err;
    return res.sendStatus(200);
  })
  console.log("Inserted into scoreboard", req.body);

})


app.get('/game/:id', function (req, res) {
  mc.query(`SELECT player FROM scoreboards WHERE id = ?`, [req.params.id], function(err, results, fields) {
    console.log("resultat", results);

    if (results.length>0) {

    var playerID = results[0].player;
    mc.query(`SELECT * FROM users WHERE id = ?`, [playerID], function(err, results, fields) {
      if(err) throw err;
      console.log(results, req.headers.password);
      if (results.length>0) {
        if (results[0].password == req.headers.password) {

          var id = req.params.id;
          console.log("the id", req.params.id);
          mc.query('SELECT * FROM scoreboards WHERE id=? ', [id], function(err, results, fields) {
            if(err) throw err;
            console.log("id", results);
            return res.send(results[0]);
          })

        } else {
          return res.sendStatus(401);
        }
      } else {
        return res.sendStatus(401);
      }


    })
  } else {
    return res.sendStatus(401);
  }

  })


})



app.put('/game/:id', function(req, res) {
  console.log("cancer:", typeof(req.body.field));
  var id = req.params.id;
  var identifier = req.body.field;
  console.log("body.field:", req.body.field, typeof(req.body.field));
  mc.query(`UPDATE scoreboards SET ${req.body.field} = ? WHERE id = ?`, [req.body.value, parseInt(req.params.id)], function(err, results, fields){
    if(err) throw err;

    return res.send(results);
  })
  console.log(req.params.id);
  mc.query(`UPDATE scoreboards SET rounds = rounds+1 WHERE id = ?`, [req.params.id]);
  mc.query(`UPDATE scoreboards SET score = score+? WHERE id = ?`, [req.body.value ,req.params.id]);
  console.log("Inserted into scoreboard", req.body);

})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


var server = app.listen(process.env.PORT || 80, function () {
   var port = server.address().port;
   console.log("App now running on port", port);
 });


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/authenticate', (req, res) => {
  console.log("passord", req.body.password);
  mc.query(`SELECT * FROM users WHERE username = ?`, [req.body.email], function(err, results, fields) {
    if(err) throw err;

    console.log("results:", results.length);
    if (results.length>0) {
    if (results[0].password == req.body.password) {
      console.log("pog");
      return res.status(200).cookie('user', results[0]).json({
            success:true,
            redirectUrl: `../gamelist/${results[0].id}`
        });

      /*json({
            success:true,
            redirectUrl: `../gamelist/${results[0].id}`
        })*/
      console.log("sent");
    } else {
      console.log("feil");
      return res.status(401).json({
            success:false,
            status:401

        });
    }
  } else {
    return res.status(401).json({
          success:false,
          status:401

      });
  }
  })


});
app.post('/api/register', (req, res) => {
  console.log("passord", req.body.password);

  mc.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [req.body.email, req.body.password], function(err, results, fields) {
    if(err) throw err;


  });
  mc.query(`SELECT * FROM users WHERE username = ?`, [req.body.email], function(err, results, fields) {
      if(err) throw err;
      console.log(results[0], results[0].password);
      return res.status(200).cookie('user', results[0]).json({
            success:true,
            redirectUrl: `../gamelist/${results[0].id}`
        });
    });


});

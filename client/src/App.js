import React, {Component, useState} from 'react';
import logo from './logo.svg';
import {Button, Form, FormGroup, FormControl, ControlLabel, Navbar, Table, ListGroup, Row, Col} from "react-bootstrap";
import {Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import styles from './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import {useParams} from 'react-router';
import {NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Home extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: ''
  };

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {

        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    }).catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  output = [];

  componentDidMount() {
    this.callApi().then(res => {
      this.setState({response: res});

    }).catch(err => console.log(err));

    this.logState();
  }

  callApi = async () => {
    const response = await fetch('/ping');
    console.log(response);
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);

    console.log(body);
    return body;
  };

  logState = async () => {
    console.log("state:", this.state.response);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: this.state.post})
    });
    const body = await response.text();
    console.log(body);
    this.setState({responseToPost: body});
  };

  render() {
    if (!this.state.response) {
      return (<p>response was empty</p>)
    } else {
      return (<div>

        <form onSubmit={this.onSubmit}>
          <h1>Login Below!</h1>
          <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} required="required"/>
          <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange} required="required"/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {
            this.state.response.map(username => {
              return (<li key={username.username}>{username.username}</li>)
            })
          }
          <li key={this.state.response[1].username}>{this.state.response[1].username}</li>

        </ul>
      </div>);
    }

  }
}
class ChangePassword extends Component {

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    fetch(`/changePassword/${this.props.match.params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.match.params.id, password: this.state.password})
    }).then((response) => response.json()).then((messages) => {
      console.log(messages.redirectUrl);
      console.log("cookie:", cookies.get('user'));
      this.props.history.push(messages.redirectUrl);
      //this.props.history.push(`/gamelist/${this.props.match.params.id}`);
    });

  }








      render() {
        return(
          <Card style={{width:"35rem", margin:"auto"}}>
            <Navbar style={{
                width: '35rem',
                margin:"auto"
              }} bg="light" expand="lg">
                <Navbar.Brand style={{
                    margin:"auto"
                  }} href="">Yatzy</Navbar.Brand>
            </Navbar>
            <Form style={{width:"80%", margin:"auto"}} onSubmit={this.onSubmit}>
              <Card.Title>Change your password</Card.Title>

              <Form.Group controlId="formBasicEmail">

                <Form.Control style={{ margin:"auto"}} type="password" name="password" placeholder="Enter password" required onChange={this.handleInputChange}/>

              </Form.Group>

              <Button style={{}}variant="primary" type="submit" value="Submit">
                Change Password
              </Button>



            </Form>

          </Card>
        )
      }
}
class Login extends Component {
  state = {
    password: '',
    email: ''
  }
  errorCode = "";

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
      }
    }).then((response) => response.json()).then((messages) => {
      console.log(messages);
      console.log(messages.redirectUrl);
      if (messages.status==401) {
        console.log("password was incorrect");
        this.errorCode = "Could not recognize this username/password combination";
        this.forceUpdate();
      }
      console.log(messages.redirectUrl);
      console.log("cookie:", cookies.get('user'));
      if (messages.redirectUrl) {
        this.props.history.push(messages.redirectUrl);
      }
    }).catch(err => {
      console.log(err);
      console.log("You do not have access to this gamelist");
      var user = cookies.get('user');




    });

  }

  render() {

    return (
      <div>

      <Container >
        <Navbar style={{
            width: '35rem',
            margin:"auto"
          }} bg="light" expand="lg">
            <Navbar.Brand style={{
                margin:"auto"
              }} href="#home">Yatzy</Navbar.Brand>
        </Navbar>
        <Card style={{
            width: '35rem',
            margin:"auto"
          }}>


          <Form style={{width:"80%", margin:"auto"}}onSubmit={this.onSubmit}>
            <Card.Title>Log in</Card.Title>
            <Form.Group controlId="formBasicEmail">

              <Form.Control style={{margin:"auto"}}type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail">

              <Form.Control style={{ margin:"auto"}} type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange}/>

            </Form.Group>


            <Button style={{width:"20%"}}variant="primary" type="submit" value="Submit">
              Log in
            </Button>
            <h6>{this.errorCode}</h6>



          </Form>
          <Card.Header>

            <Nav className="mr-auto" style={{justifyContent:"center"}}>
              <Nav.Link href="/register" style={{textAlign: "center"}}>Not a registered user? Click here to create your account</Nav.Link>
            </Nav>


          </Card.Header>
        </Card>
      </Container>

    </div>);
  }

}
class Register extends Component {
  state = {
    password: '',
    email: ''
  }

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
      }
    }).then((response) => response.json()).then((messages) => {
      console.log(messages.redirectUrl);
      console.log("cookie:", cookies.get('user'));
      this.props.history.push(messages.redirectUrl);
    });

  }

  render() {

    return (<div>

      <Container className="text-center">
        <Card style={{
            width: '35rem'
          }}>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="/register">Register!</Nav.Link>
            </Nav.Item>

          </Nav>
          <Card.Header>Register!</Card.Header>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" value="Submit">
              Register
            </Button>

          </Form>
        </Card>
      </Container>

    </div>);
  }

}

class App extends Component {
  render() {
    return (<div>

      <BrowserRouter>

        <Route exact="exact" path="/login" component={Login}/>
        <Route exact="exact" path="/register" component={Register}/>
        <Route exact="exact" path="/changePassword/:id" component={ChangePassword}/>
        <Route exact="exact" path="/" component={Home}/>
        <Route exact="exact" path="/gamelist/:id" component={Gamelist}/>
        <Route exact="exact" path="/game/:id" component={GameDetails}/>

      </BrowserRouter>
    </div>)
  }

}

class Gamelist extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: ''
  };
  logOut() {
    cookies.remove('user', { path: '/' });
    console.log(cookies.get('user'));
    this.props.history.push('/login');
  }
  componentDidMount() {
    this.callApi().then(res => {
      console.log("res:", typeof(res));
      this.setState({response: res});

    }).catch(err => {
      console.log("You do not have access to this gamelist");
      var user = cookies.get('user');
      console.log(err);
      console.log(user);
      if (!user || !user.id) {
        return this.props.history.push('/login/');
      }
      this.props.history.push('/gamelist/' + user.id);
      this.componentDidMount()

    });
    console.log(this.state.response);

  }

  callApi = async () => {
    console.log(cookies.get('user'));
    let userAuth = cookies.get('user');
    console.log(userAuth);
    const response = await fetch(`/gamelist/${this.props.match.params.id}`, {headers: userAuth});
    if (response.status !== 200) {
      throw Error(response.message);
    }

    const body = await response.json();
    if (response.status !== 200)

      console.log(body);
    return body;
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("new game");
    fetch(`/gamelist/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.match.params.id})
    }).then(res => {
      this.props.history.push(`/gamelist/${this.props.match.params.id}`);
      this.componentDidMount()
    });

  }


  render() {
    if (!this.state.response) {
      return (<p>still rendering</p>)
    } else {
      return (


        <div>
          <Container style={{width:"36rem", paddingRight:0}}>
          <Nav className="justify-content-end">

      <Button variant="outline-primary"onClick={() => this.logOut()}>Log out</Button>

      </Nav>
        <Card style={{width:"35rem", margin:"auto"}}>

          <Navbar style={{
              width: '35rem',
              margin:"auto"
            }} bg="light" expand="lg">
              <Navbar.Brand style={{
                  margin:"auto"
                }} href="">Yatzy</Navbar.Brand>
          </Navbar>
          <Navbar style={{
              width: '35rem',
              margin:"auto"
            }} bg="light" expand="lg">
            <Button variant="outline-secondary" type="submit" value="Submit" onClick={this.onSubmit}>
              Start a new game
            </Button>
            <Button variant="outline-secondary" type="submit" value="Submit" href={"/changePassword/"+this.props.match.params.id}>
              Change your password
            </Button>

          </Navbar>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Game ID</th>
                <th>Date</th>
                <th>Rounds</th>
                <th>Score</th>

              </tr>
            </thead>
            <tbody>

        {
          this.state.response.map(game => {
            var d = game.date;
            {if (game.date){
                var date = new Date(game.date).toUTCString()
              } else {
                var date = "no date specified"
              }}

            {console.log("date", game.date)}
            return (
              <tr>
                <td key={game.id}>{game.id} </td>
                <td>{date}</td>
                <td>{game.rounds}/15</td>
                <td>{game.score}</td>
                <td><Button variant="outline-secondary" href={"/game/"+game.id}>
                  Click me to open
                </Button></td>
              </tr>



            )
          })
        }
      </tbody>
      </Table>
      </Card>
    </Container>
      </div>
    )
    }
  }
}
class GameDetails extends Component {
  constructor(props, context){
    super(props, context);
    this.rollDice = this.rollDice.bind(this);
  }
  state = {
    response: '',
    post: '',
    responseToPost: '',
    attempts: ''
  };
  dice = {
    attempts: 3,
    uvalgt: 5,
    terninger: [],
    savedDice: []
  }
  results = {
    ones: '',
    twos: '',
    threes: '',
    fours: '',
    fives: '',
    sixes: '',
    housePair: '',
    houseTriplet: '',
    one_pair: '',
    two_pairs: '',
    triplet: '',
    four_of_a_kind: '',
    small_straight: '',
    large_straight: '',
    house: '',
    chance: '',
    Yatzy: ''
  }
  updateVariable = {
    field: '',
    value: ''
  }

  componentDidMount() {
    this.callApi().then(res => {
      console.log("res:", res);
      this.setState({response: res});
      console.log(this.state.response);


    }).catch(err => {
      console.log("You do not have access to this game");
      var user = cookies.get('user');
      console.log(err);
      console.log(user);
      if (!user || !user.id) {
        return this.props.history.push('/login/');
      }
      this.props.history.push('/gamelist/' + user.id);


    });


    this.calculateResult();
  }

  rollDice() {
    console.log(this.state);
    if (this.dice.attempts == 0) {
      return (window.alert("out of attempts, save your round by clicking one of the empty fields in the scoreboard"))
    }
    this.dice.terninger = [];

    for (var i = 0; i < this.dice.uvalgt; i++) {
      this.dice.terninger.push(Math.ceil(Math.random() * 6));

    }
    this.dice.attempts--;
    if (this.dice.attempts == 0) {
      console.log(this.dice.terninger.length);
      for (var i = 0; i < this.dice.terninger.length; i++) {
        console.log(this.dice.terninger[i]);
        console.log(i);
        this.dice.savedDice.push(this.dice.terninger[i]);

        console.log(this.dice.terninger)
      }
      this.dice.terninger= [];
    }
    this.calculateResult();
    this.forceUpdate();
  }

  calculateResult() {
    var terningVerdier = this.dice.savedDice;

    // Resetter verdiene
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var sixes = 0;
    var housePair = 0;
    var houseTriplet = 0;
    var one_pair = 0;
    var two_pairs = 0;
    var triplet = 0;
    var four_of_a_kind = 0;
    var small_straight = 0;
    var large_straight = 0;
    var full_house = 0;
    var chance = 0;
    var Yatzy = 0;
    this.results.ones = ones;
    this.results.twos = twos;
    this.results.threes = threes;
    this.results.fours = fours;
    this.results.fives = fives;
    this.results.sixes = sixes;
    this.results.one_pair = one_pair;
    this.results.two_pairs = two_pairs;
    this.results.triplet = triplet;
    this.results.four_of_a_kind = four_of_a_kind;
    this.results.small_straight = small_straight;
    this.results.large_straight = large_straight;
    this.results.full_house = full_house;
    this.results.chance = chance;
    this.results.Yatzy = Yatzy;

    // Summerer alt fra ones til sixes
    for (var i = 0; i < terningVerdier.length; i++) {
      if (terningVerdier[i] == 1) {
        ones += 1;
        this.results.ones = ones;
      }
      if (terningVerdier[i] == 2) {
        twos += 2;
        this.results.twos = twos;
      }
      if (terningVerdier[i] == 3) {
        threes += 3;
        this.results.threes = threes;
      }
      if (terningVerdier[i] == 4) {
        fours += 4;
        this.results.fours = fours;

      }
      if (terningVerdier[i] == 5) {
        fives += 5;
        this.results.fives = fives;
      }
      if (terningVerdier[i] == 6) {
        sixes += 6;
        this.results.sixes = sixes;
      }
    }

    var verdiAntall = [];
    verdiAntall = [
      ones, twos / 2,
      threes / 3,
      fours / 4,
      fives / 5,
      sixes / 6
    ];

    var par = [];

    for (var i = 0; i < verdiAntall.length; i++) {
      if (verdiAntall[i] >= 2) {

        par.push(i + 1);

      }
    }
    for (var i = 0; i < verdiAntall.length; i++) {

      //one pair
      if (par.length >= 1) {
        one_pair = par[par.length - 1] * 2;
        this.results.one_pair = one_pair;
      }
      //Two pairs
      if (par.length == 2) {
        two_pairs = par[0] * 2 + par[1] * 2;
        this.results.two_pairs = two_pairs;
      }

      //triplets
      for (var i = 0; i < verdiAntall.length; i++) {
        if (verdiAntall[i] >= 3) {
          let value = i + 1;
          triplet = value * 3;
          this.results.triplet = triplet;
        }
      }

    }
    // Four of a kind
    for (var i = 0; i < verdiAntall.length; i++) {
      if (verdiAntall[i] >= 4) {
        let value = i + 1;
        four_of_a_kind = value * 4;
        this.results.four_of_a_kind = four_of_a_kind;
      }
    }

    // small Straight
    var counterSmall = 0;
    for (var i = 0; i < verdiAntall.length - 1; i++) {
      if (verdiAntall[i] == 0) {

        break
      } else {
        counterSmall++
      }
      if (counterSmall == 5) {
        small_straight = 15;
        this.results.small_straight = small_straight;
      }
    }

    var counterLarge = 0;
    for (var i = 1; i < verdiAntall.length; i++) {
      if (verdiAntall[i] == 0) {

        break
      } else {
        counterLarge++
      }
      if (counterLarge == 5) {
        large_straight = 20;
        this.results.large_straight = large_straight;
      }
    }

    //House

    if (par.length == 2 && triplet >= 1) {
      for (var i = 0; i < verdiAntall.length; i++) {
        if (verdiAntall[i] == 2) {
          let y = i + 1;
          housePair = y * 2;

        } else if (verdiAntall[i] == 3) {
          let y = i + 1;
          houseTriplet = y * 3;
        }
      }
      full_house = housePair + houseTriplet;
      this.results.full_house = full_house;
    }

    //chance
    chance = ones + twos + threes + fours + fives + sixes;
    this.results.chance = chance;

    //Yatzy
    for (var i = 0; i < verdiAntall.length; i++) {
      if (verdiAntall[i] == 5) {
        Yatzy = 50;
        this.results.Yatzy = Yatzy;
      }

    }

  }

  goBack2() {
  this.props.history.push(`/gamelist/${this.state.response.player}`);
  }
  logOut() {
    cookies.remove('user', { path: '/' });
    console.log(cookies.user);
    this.props.history.push('/login');
  }

  saveDice(diceIndex) {
    console.log(this.dice.attempts);
    var test = diceIndex.index;
    this.dice.savedDice.push(this.dice.terninger[diceIndex.index])
    this.dice.terninger.splice(diceIndex.index, 1);

    this.dice.uvalgt = this.dice.terninger.length;
    this.calculateResult();
    this.forceUpdate();
  }
  removeDice(diceIndex) {
    console.log(this.dice.attempts);
    var test = diceIndex.index;
    this.dice.terninger.push(this.dice.savedDice[diceIndex.index])
    this.dice.savedDice.splice(diceIndex.index, 1);
    this.dice.uvalgt = this.dice.terninger.length;
    this.calculateResult();
    this.forceUpdate();
  }
  saveRound(value) {

    this.updateVariable.field = value;
    this.updateVariable.value = this.results[value];
    console.log(this.updateVariable)
    if (!this.state.response[value] && this.state.response[value] != 0) {
      console.log("Cell is empty, registering round:")
      this.dice.attempts=3;
      this.dice.terninger=[];
      this.dice.savedDice=[];
      this.dice.uvalgt=5;
      console.log(this.dice.attempts);
      fetch(`/game/${this.props.match.params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.updateVariable)
      });

      {
        var image = "dice1";
      }
      const timer = setTimeout(() => {
        console.log("executing reload in 5 seconds");

        this.componentDidMount();
  }, 1500);
  return () => clearTimeout(timer);


    } else {
      console.log("ikke tom");
      return;
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`/game/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: this.state.post})
    });
    const body = await response.text();
    console.log(body);
    this.setState({responseToPost: body});
  };

  callApi = async () => {
    let userAuth = cookies.get('user');
    const response = await fetch(`/game/${this.props.match.params.id}`, {headers: userAuth});
    console.log(response);
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);

    console.log(body);
    return body;
  };



  render() {

    if (!this.state.response) {
      return (<p>Still loading data</p>)
    } else {
      return (
      <Container className="block-example border border-dark">
        <Navbar >
        <Nav className="mr-auto">

          <Button variant="outline-primary"onClick={() => this.goBack2()}>Go back</Button>
            <DropdownButton variant="outline-primary"id="dropdown-item-button" title="Need help? Click here to see how to play">
              <h5 className="block-example border border-dark" style={{padding:"1rem"}}>How to play yatzy: You have threww throws every round. To throw the dice click on the "Throw dice" button in the top left corner. The red box will contain the dice currently being thrown. If you click any of the dice you will move it to the green box, which won't be affected by a rethrow. Once you are happy with your dice or you are out of throws you can click on the row you would like to save the results in. This will lock this column for the rest of the game.</h5>
            </DropdownButton>
        </Nav>
        <Nav>

    <Button variant="outline-primary"onClick={() => this.logOut()}>Log out</Button>

    </Nav>

        </Navbar>


        <Navbar style={{

            margin:"auto"
          }} bg="light" expand="lg">

            <Navbar.Brand style={{
                margin:"auto"
              }} href="">Yatzy</Navbar.Brand>

        </Navbar>
          <ListGroup horizontal>
          <ListGroup>
            <Card style={{background:"red", height:"150px", width:"40rem"}}>
              <Card.Title>Dice on board (These will be rerolled)</Card.Title>
              <Row>
              {
                this.dice.terninger.map((dice, index) => {
                  var diceIMG = 'dice' + dice

                  return (<Col xs="auto"><Image onClick={() => this.saveDice({index})} className="picture" src={`/imagefolder/${dice}.png`} rounded="rounded"/></Col>)
                })
              }
            </Row>
              </Card>

                <Card style={{background:"green", height:"150px", width:"40rem"}}>
                <Card.Title>Chosen dice (These won't be rerolled)</Card.Title>

                <Row>
              {
                this.dice.savedDice.map((dice, index) => {
                  return (<Col xs="auto"><Image onClick={() => this.removeDice({index})} className="picture" src={`/imagefolder/${dice}.png`} rounded="rounded"/></Col>)
                })
              }
              </Row>

              </Card>
            </ListGroup>
            <Card style={{width:"100%", display:"flex", justifyContent:"center"}}>

              <Card.Title style={{width:"100%", display:"flex", justifyContent:"center"}}><h1  style={{margin:"auto", fontSize:"10rem"}}>{this.state.response.score}</h1></Card.Title>
            </Card>

          </ListGroup>

          <Card.Header style={{display:"flex"}}>
                <Button style={{margin:"auto", width:"12.5rem"}}variant="outline-secondary" onClick={this.rollDice}>Roll dice, {this.dice.attempts} attempts remaining</Button>
          </Card.Header>


            <CardGroup>
            <Card>
            <Card.Title>test</Card.Title>
            <Table variant="dark" striped bordered hover>
              <tbody>
                <tr onClick={() => this.saveRound('ones')}>
                  <td className="td">Ones</td>
                  <div className="td2">
                    <td id="ones"  className="td noborder">{this.state.response.ones}</td>
                    <td className="cursive">({this.results.ones})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('twos')}>
                  <td className="td">Twos</td>
                  <div className="td2">
                    <td id="twos"  className="td noborder">{this.state.response.twos}</td>
                    <td className="cursive">({this.results.twos})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('threes')}>
                  <td className="td">Threes</td>
                  <div className="td2">
                    <td id="threes"  className="td noborder">{this.state.response.threes}</td>
                    <td className="cursive">({this.results.fours})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('fours')}>
                  <td className="td">Fours</td>
                  <div className="td2">
                    <td id="fours"  className="td noborder">{this.state.response.fours}</td>
                    <td className="cursive">({this.results.fours})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('fives')}>
                  <td className="td">Fives</td>
                  <div className="td2">
                    <td id="fives"  className="td noborder">{this.state.response.fives}</td>
                    <td className="cursive">({this.results.fives})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('sixes')}>
                  <td className="td">Sixes</td>
                  <div className="td2">
                    <td id="sixes"  className="td noborder">{this.state.response.sixes}</td>
                    <td className="cursive">({this.results.sixes})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('one_pair')}>
                  <td className="td">One Pair</td>
                  <div className="td2">
                    <td id="one_pair"  className="td noborder">{this.state.response.one_pair}</td>
                    <td className="cursive">({this.results.one_pair})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('two_pairs')}>
                  <td className="td">Two pairs</td>
                  <div className="td2">
                    <td id="two_pairs"  className="td noborder">{this.state.response.two_pairs}</td>
                    <td className="cursive">({this.results.two_pairs})</td>
                  </div>
                </tr>
                <tr  onClick={() => this.saveRound('triplet')}>
                  <td className="td">Triplets</td>
                  <div className="td2">
                    <td id="triplet" className="td noborder">{this.state.response.triplet}</td>
                    <td className="cursive">({this.results.triplet})</td>
                  </div>
                </tr>
                <tr className="test" onClick={() => this.saveRound('four_of_a_kind')}>
                  <td className="td">Four of a kind</td>
                  <div className="td2">
                    <td id="four_of_a_kind"  className="td noborder">{this.state.response.four_of_a_kind}</td>
                    <td className="cursive">({this.results.four_of_a_kind})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('small_straight')}>
                  <td className="td">Small Straight</td>
                  <div className="td2">
                    <td id="small_straight"  className="td noborder">{this.state.response.small_straight}</td>
                    <td className="cursive">({this.results.small_straight})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('large_straight')}>
                  <td className="td">Large Straight</td>
                  <div className="td2">
                    <td id="large_straight"  className="td noborder">{this.state.response.large_straight}</td>
                    <td className="cursive">({this.results.large_straight})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('chance')}>
                  <td className="td">Chance</td>
                  <div className="td2">
                    <td id="chance"  className="td noborder">{this.state.response.chance}</td>
                    <td className="cursive">({this.results.chance})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('Yatzy')}>
                  <td className="td">Yatzy</td>
                  <div className="td2">
                    <td id="yatzy"  className="td noborder">{this.state.response.yatzy}</td>
                    <td className="cursive">({this.results.Yatzy})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('full_house')}>
                  <td className="td">Full house</td>
                  <div className="td2">
                    <td id="full_house"  className="td noborder">{this.state.response.full_house}</td>
                    <td className="cursive">({this.results.full_house})</td>
                  </div>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card>
            <Table variant="dark" striped bordered hover>
              <tbody>
                <tr onClick={() => this.saveRound('ones')}>
                  <td className="td">Ones</td>
                  <div className="td2">
                    <td id="ones"  className="td noborder">{this.state.response.ones}</td>
                    <td className="cursive">({this.results.ones})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('twos')}>
                  <td className="td">Twos</td>
                  <div className="td2">
                    <td id="twos"  className="td noborder">{this.state.response.twos}</td>
                    <td className="cursive">({this.results.twos})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('threes')}>
                  <td className="td">Threes</td>
                  <div className="td2">
                    <td id="threes"  className="td noborder">{this.state.response.threes}</td>
                    <td className="cursive">({this.results.fours})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('fours')}>
                  <td className="td">Fours</td>
                  <div className="td2">
                    <td id="fours"  className="td noborder">{this.state.response.fours}</td>
                    <td className="cursive">({this.results.fours})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('fives')}>
                  <td className="td">Fives</td>
                  <div className="td2">
                    <td id="fives"  className="td noborder">{this.state.response.fives}</td>
                    <td className="cursive">({this.results.fives})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('sixes')}>
                  <td className="td">Sixes</td>
                  <div className="td2">
                    <td id="sixes"  className="td noborder">{this.state.response.sixes}</td>
                    <td className="cursive">({this.results.sixes})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('one_pair')}>
                  <td className="td">One Pair</td>
                  <div className="td2">
                    <td id="one_pair"  className="td noborder">{this.state.response.one_pair}</td>
                    <td className="cursive">({this.results.one_pair})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('two_pairs')}>
                  <td className="td">Two pairs</td>
                  <div className="td2">
                    <td id="two_pairs"  className="td noborder">{this.state.response.two_pairs}</td>
                    <td className="cursive">({this.results.two_pairs})</td>
                  </div>
                </tr>
                <tr  onClick={() => this.saveRound('triplet')}>
                  <td className="td">Triplets</td>
                  <div className="td2">
                    <td id="triplet" className="td noborder">{this.state.response.triplet}</td>
                    <td className="cursive">({this.results.triplet})</td>
                  </div>
                </tr>
                <tr className="test" onClick={() => this.saveRound('four_of_a_kind')}>
                  <td className="td">Four of a kind</td>
                  <div className="td2">
                    <td id="four_of_a_kind"  className="td noborder">{this.state.response.four_of_a_kind}</td>
                    <td className="cursive">({this.results.four_of_a_kind})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('small_straight')}>
                  <td className="td">Small Straight</td>
                  <div className="td2">
                    <td id="small_straight"  className="td noborder">{this.state.response.small_straight}</td>
                    <td className="cursive">({this.results.small_straight})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('large_straight')}>
                  <td className="td">Large Straight</td>
                  <div className="td2">
                    <td id="large_straight"  className="td noborder">{this.state.response.large_straight}</td>
                    <td className="cursive">({this.results.large_straight})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('chance')}>
                  <td className="td">Chance</td>
                  <div className="td2">
                    <td id="chance"  className="td noborder">{this.state.response.chance}</td>
                    <td className="cursive">({this.results.chance})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('Yatzy')}>
                  <td className="td">Yatzy</td>
                  <div className="td2">
                    <td id="yatzy"  className="td noborder">{this.state.response.yatzy}</td>
                    <td className="cursive">({this.results.Yatzy})</td>
                  </div>
                </tr>
                <tr onClick={() => this.saveRound('full_house')}>
                  <td className="td">Full house</td>
                  <div className="td2">
                    <td id="full_house"  className="td noborder">{this.state.response.full_house}</td>
                    <td className="cursive">({this.results.full_house})</td>
                  </div>
                </tr>
              </tbody>
            </Table>
          </Card>
          </CardGroup>


      </Container>
    );
    }
  }

}

export default App;

(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{51:function(e,t,a){},67:function(e,t,a){e.exports=a(83)},72:function(e,t,a){},74:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},83:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(18),l=a.n(n),o=(a(72),a(38)),c=a(12),i=a.n(c),u=a(26),m=a(35),d=a(22),h=a(23),p=a(25),E=a(24),g=(a(74),a(92)),f=a(91),v=a(57),y=a(88),b=a(93),N=a(89),w=a(56),k=a(90),C=a(36),_=a(64),x=a(17),O=a(6),S=a(62),j=(a(75),a(51),a(27)),T=a(16),R=new(a(65).a);l.a.render(r.a.createElement(j.a,{basename:""},r.a.createElement(Y,null)),document.getElementById("root"));var D=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={response:"",post:"",responseToPost:""},e.handleInputChange=function(t){var a=t.target,s=a.value,r=a.name;e.setState(Object(m.a)({},r,s))},e.onSubmit=function(t){t.preventDefault(),fetch("/api/authenticate",{method:"POST",body:JSON.stringify(e.state),headers:{"Content-Type":"application/json"}}).then((function(t){if(200!==t.status)throw new Error(t.error);e.props.history.push("/")})).catch((function(e){console.error(e),alert("Error logging in please try again")}))},e.output=[],e.callApi=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ping");case 2:return t=e.sent,console.log(t),e.next=6,t.json();case 6:if(a=e.sent,200===t.status){e.next=9;break}throw Error(a.message);case 9:return console.log(a),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)}))),e.logState=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("state:",e.state.response);case 1:case"end":return t.stop()}}),t)}))),e.handleSubmit=function(){var t=Object(u.a)(i.a.mark((function t(a){var s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("/api/world",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:e.state.post})});case 3:return s=t.sent,t.next=6,s.text();case 6:r=t.sent,console.log(r),e.setState({responseToPost:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.callApi().then((function(t){e.setState({response:t})})).catch((function(e){return console.log(e)})),this.logState()}},{key:"render",value:function(){return this.state.response?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Login Below!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:"required"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:"required"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("ul",null,this.state.response.map((function(e){return r.a.createElement("li",{key:e.username},e.username)})),r.a.createElement("li",{key:this.state.response[1].username},this.state.response[1].username))):r.a.createElement("p",null,"response was empty")}}]),a}(s.Component),z=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).handleInputChange=function(t){var a=t.target,s=a.value,r=a.name;e.setState(Object(m.a)({},r,s))},e.onSubmit=function(t){t.preventDefault(),console.log(e.state),fetch("/changePassword/".concat(e.props.match.params.id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.props.match.params.id,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){console.log(t.redirectUrl),console.log("cookie:",R.get("user")),e.props.history.push(t.redirectUrl)}))},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{style:{width:"35rem",margin:"auto"}},r.a.createElement(g.a,{style:{width:"35rem",margin:"auto"},bg:"light",expand:"lg"},r.a.createElement(g.a.Brand,{style:{margin:"auto"},href:""},"Yatzy")),r.a.createElement(f.a,{style:{width:"80%",margin:"auto"},onSubmit:this.onSubmit},r.a.createElement(O.a.Title,null,"Change your password"),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Control,{style:{margin:"auto"},type:"password",name:"password",placeholder:"Enter password",required:!0,onChange:this.handleInputChange})),r.a.createElement(v.a,{style:{},variant:"primary",type:"submit",value:"Submit"},"Change Password")))}}]),a}(s.Component),I=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={password:"",email:""},e.errorCode="",e.handleInputChange=function(t){var a=t.target,s=a.value,r=a.name;e.setState(Object(m.a)({},r,s))},e.onSubmit=function(t){t.preventDefault(),fetch("/api/authenticate",{method:"POST",body:JSON.stringify(e.state),headers:{"Content-Type":"application/json",Accept:"text/plain"}}).then((function(e){return e.json()})).then((function(t){console.log(t),console.log(t.redirectUrl),401==t.status&&(console.log("password was incorrect"),e.errorCode="Could not recognize this username/password combination",e.forceUpdate()),console.log(t.redirectUrl),console.log("cookie:",R.get("user")),t.redirectUrl&&e.props.history.push(t.redirectUrl)})).catch((function(e){console.log(e),console.log("You do not have access to this gamelist");R.get("user")}))},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(g.a,{style:{width:"35rem",margin:"auto"},bg:"light",expand:"lg"},r.a.createElement(g.a.Brand,{style:{margin:"auto"},href:"#home"},"Yatzy")),r.a.createElement(O.a,{style:{width:"35rem",margin:"auto"}},r.a.createElement(f.a,{style:{width:"80%",margin:"auto"},onSubmit:this.onSubmit},r.a.createElement(O.a.Title,null,"Log in"),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Control,{style:{margin:"auto"},type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Control,{style:{margin:"auto"},type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(v.a,{style:{width:"20%"},variant:"primary",type:"submit",value:"Submit"},"Log in"),r.a.createElement("h6",null,this.errorCode)),r.a.createElement(O.a.Header,null,r.a.createElement(x.a,{className:"mr-auto",style:{justifyContent:"center"}},r.a.createElement(x.a.Link,{href:"/register",style:{textAlign:"center"}},"Not a registered user? Click here to create your account"))))))}}]),a}(s.Component),P=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={password:"",email:""},e.handleInputChange=function(t){var a=t.target,s=a.value,r=a.name;e.setState(Object(m.a)({},r,s))},e.onSubmit=function(t){t.preventDefault(),fetch("/api/register",{method:"POST",body:JSON.stringify(e.state),headers:{"Content-Type":"application/json",Accept:"text/plain"}}).then((function(e){return e.json()})).then((function(t){console.log(t.redirectUrl),console.log("cookie:",R.get("user")),e.props.history.push(t.redirectUrl)}))},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{className:"text-center"},r.a.createElement(O.a,{style:{width:"35rem"}},r.a.createElement(x.a,{variant:"tabs",defaultActiveKey:"#first"},r.a.createElement(x.a.Item,null,r.a.createElement(x.a.Link,{href:"/register"},"Register!"))),r.a.createElement(O.a.Header,null,"Register!"),r.a.createElement(f.a,{onSubmit:this.onSubmit},r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Label,null,"Email address"),r.a.createElement(f.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(v.a,{variant:"primary",type:"submit",value:"Submit"},"Register")))))}}]),a}(s.Component),Y=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(T.a,{exact:!0,path:"/",component:I}),"} />",r.a.createElement(T.a,{exact:"exact",path:"/login",component:I}),r.a.createElement(T.a,{exact:"exact",path:"/register",component:P}),r.a.createElement(T.a,{exact:"exact",path:"/changePassword/:id",component:z}),r.a.createElement(T.a,{exact:"exact",path:"/",component:D}),r.a.createElement(T.a,{exact:"exact",path:"/gamelist/:id",component:U}),r.a.createElement(T.a,{exact:"exact",path:"/game/:id",component:A})))}}]),a}(s.Component),U=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={response:"",post:"",responseToPost:""},e.callApi=Object(u.a)(i.a.mark((function t(){var a,s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(R.get("user")),a=R.get("user"),console.log(a),t.next=5,fetch("/gamelist/".concat(e.props.match.params.id),{headers:a});case 5:if(200===(s=t.sent).status){t.next=8;break}throw Error(s.message);case 8:return t.next=10,s.json();case 10:return r=t.sent,200!==s.status&&console.log(r),t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)}))),e.onSubmit=function(t){t.preventDefault(),console.log("new game"),fetch("/gamelist/".concat(e.props.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.props.match.params.id})}).then((function(t){e.props.history.push("/gamelist/".concat(e.props.match.params.id)),e.componentDidMount()}))},e}return Object(h.a)(a,[{key:"logOut",value:function(){R.remove("user",{path:"/"}),console.log(R.get("user")),this.props.history.push("/login")}},{key:"componentDidMount",value:function(){var e=this;this.callApi().then((function(t){console.log("res:",typeof t),e.setState({response:t})})).catch((function(t){console.log("You do not have access to this gamelist");var a=R.get("user");if(console.log(t),console.log(a),!a||!a.id)return e.props.history.push("/login/");e.props.history.push("/gamelist/"+a.id),e.componentDidMount()})),console.log(this.state.response)}},{key:"render",value:function(){var e=this;return this.state.response?r.a.createElement("div",null,r.a.createElement(C.a,{style:{width:"36rem",paddingRight:0}},r.a.createElement(x.a,{className:"justify-content-end"},r.a.createElement(v.a,{variant:"outline-primary",onClick:function(){return e.logOut()}},"Log out")),r.a.createElement(O.a,{style:{width:"35rem",margin:"auto"}},r.a.createElement(g.a,{style:{width:"35rem",margin:"auto"},bg:"light",expand:"lg"},r.a.createElement(g.a.Brand,{style:{margin:"auto"},href:""},"Yatzy")),r.a.createElement(g.a,{style:{width:"35rem",margin:"auto"},bg:"light",expand:"lg"},r.a.createElement(v.a,{variant:"outline-secondary",type:"submit",value:"Submit",onClick:this.onSubmit},"Start a new game"),r.a.createElement(v.a,{variant:"outline-secondary",type:"submit",value:"Submit",href:"/changePassword/"+this.props.match.params.id},"Change your password")),r.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Game ID"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Rounds"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,this.state.response.map((function(e){e.date;if(e.date)var t=new Date(e.date).toUTCString();else t="no date specified";return console.log("date",e.date),r.a.createElement("tr",null,r.a.createElement("td",{key:e.id},e.id," "),r.a.createElement("td",null,t),r.a.createElement("td",null,e.rounds,"/15"),r.a.createElement("td",null,e.score),r.a.createElement("td",null,r.a.createElement(v.a,{variant:"outline-secondary",href:"/game/"+e.id},"Click me to open")))}))))))):r.a.createElement("p",null,"still rendering")}}]),a}(s.Component),A=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e,s){var r;return Object(d.a)(this,a),(r=t.call(this,e,s)).state={response:"",post:"",responseToPost:"",attempts:""},r.dice={attempts:3,uvalgt:5,terninger:[],savedDice:[]},r.results={ones:"",twos:"",threes:"",fours:"",fives:"",sixes:"",housePair:"",houseTriplet:"",one_pair:"",two_pairs:"",triplet:"",four_of_a_kind:"",small_straight:"",large_straight:"",house:"",chance:"",Yatzy:""},r.updateVariable={field:"",value:""},r.handleSubmit=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/game/".concat(r.props.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:r.state.post})});case 3:return a=e.sent,e.next=6,a.text();case 6:s=e.sent,console.log(s),r.setState({responseToPost:s});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.callApi=Object(u.a)(i.a.mark((function e(){var t,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.get("user"),e.next=3,fetch("/game/".concat(r.props.match.params.id),{headers:t});case 3:return a=e.sent,console.log(a),e.next=7,a.json();case 7:if(s=e.sent,200===a.status){e.next=10;break}throw Error(s.message);case 10:return console.log(s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),r.rollDice=r.rollDice.bind(Object(o.a)(r)),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.callApi().then((function(t){console.log("res:",t),e.setState({response:t}),console.log(e.state.response)})).catch((function(t){console.log("You do not have access to this game");var a=R.get("user");if(console.log(t),console.log(a),!a||!a.id)return e.props.history.push("/login/");e.props.history.push("/gamelist/"+a.id)})),this.calculateResult()}},{key:"rollDice",value:function(){if(console.log(this.state),0==this.dice.attempts)return window.alert("out of attempts, save your round by clicking one of the empty fields in the scoreboard");this.dice.terninger=[];for(var e=0;e<this.dice.uvalgt;e++)this.dice.terninger.push(Math.ceil(6*Math.random()));if(this.dice.attempts--,0==this.dice.attempts){console.log(this.dice.terninger.length);for(e=0;e<this.dice.terninger.length;e++)console.log(this.dice.terninger[e]),console.log(e),this.dice.savedDice.push(this.dice.terninger[e]),console.log(this.dice.terninger);this.dice.terninger=[]}this.calculateResult(),this.forceUpdate()}},{key:"calculateResult",value:function(){var e=this.dice.savedDice,t=0,a=0,s=0,r=0,n=0,l=0,o=0,c=0,i=0,u=0,m=0,d=0,h=0,p=0,E=0,g=0,f=0;this.results.ones=t,this.results.twos=a,this.results.threes=s,this.results.fours=r,this.results.fives=n,this.results.sixes=l,this.results.one_pair=i,this.results.two_pairs=u,this.results.triplet=m,this.results.four_of_a_kind=d,this.results.small_straight=h,this.results.large_straight=p,this.results.full_house=E,this.results.chance=g,this.results.Yatzy=f;for(var v=0;v<e.length;v++)1==e[v]&&(t+=1,this.results.ones=t),2==e[v]&&(a+=2,this.results.twos=a),3==e[v]&&(s+=3,this.results.threes=s),4==e[v]&&(r+=4,this.results.fours=r),5==e[v]&&(n+=5,this.results.fives=n),6==e[v]&&(l+=6,this.results.sixes=l);var y;y=[t,a/2,s/3,r/4,n/5,l/6];var b=[];for(v=0;v<y.length;v++)y[v]>=2&&b.push(v+1);for(v=0;v<y.length;v++){b.length>=1&&(i=2*b[b.length-1],this.results.one_pair=i),2==b.length&&(u=2*b[0]+2*b[1],this.results.two_pairs=u);for(v=0;v<y.length;v++){if(y[v]>=3)m=3*(v+1),this.results.triplet=m}}for(v=0;v<y.length;v++){if(y[v]>=4)d=4*(v+1),this.results.four_of_a_kind=d}var N=0;for(v=0;v<y.length-1&&0!=y[v];v++)5==++N&&(h=15,this.results.small_straight=h);var w=0;for(v=1;v<y.length&&0!=y[v];v++)5==++w&&(p=20,this.results.large_straight=p);if(2==b.length&&m>=1){for(v=0;v<y.length;v++){if(2==y[v])o=2*(v+1);else if(3==y[v]){c=3*(v+1)}}E=o+c,this.results.full_house=E}g=t+a+s+r+n+l,this.results.chance=g;for(v=0;v<y.length;v++)5==y[v]&&(f=50,this.results.Yatzy=f)}},{key:"goBack2",value:function(){this.props.history.push("/gamelist/".concat(this.state.response.player))}},{key:"logOut",value:function(){R.remove("user",{path:"/"}),console.log(R.user),this.props.history.push("/login")}},{key:"saveDice",value:function(e){console.log(this.dice.attempts);e.index;this.dice.savedDice.push(this.dice.terninger[e.index]),this.dice.terninger.splice(e.index,1),this.dice.uvalgt=this.dice.terninger.length,this.calculateResult(),this.forceUpdate()}},{key:"removeDice",value:function(e){console.log(this.dice.attempts);e.index;this.dice.terninger.push(this.dice.savedDice[e.index]),this.dice.savedDice.splice(e.index,1),this.dice.uvalgt=this.dice.terninger.length,this.calculateResult(),this.forceUpdate()}},{key:"saveRound",value:function(e){var t=this;if(this.updateVariable.field=e,this.updateVariable.value=this.results[e],console.log(this.updateVariable),!this.state.response[e]&&0!=this.state.response[e]){console.log("Cell is empty, registering round:"),this.dice.attempts=3,this.dice.terninger=[],this.dice.savedDice=[],this.dice.uvalgt=5,console.log(this.dice.attempts),fetch("/game/".concat(this.props.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.updateVariable)});var a=setTimeout((function(){console.log("executing reload in 5 seconds"),t.componentDidMount()}),1500);return function(){return clearTimeout(a)}}console.log("ikke tom")}},{key:"render",value:function(){var e=this;return this.state.response?r.a.createElement(C.a,{className:"block-example border border-dark"},r.a.createElement(g.a,null,r.a.createElement(x.a,{className:"mr-auto"},r.a.createElement(v.a,{variant:"outline-primary",onClick:function(){return e.goBack2()}},"Go back"),r.a.createElement(_.a,{variant:"outline-primary",id:"dropdown-item-button",title:"Need help? Click here to see how to play"},r.a.createElement("h5",{className:"block-example border border-dark",style:{padding:"1rem"}},'How to play yatzy: You have threww throws every round. To throw the dice click on the "Throw dice" button in the top left corner. The red box will contain the dice currently being thrown. If you click any of the dice you will move it to the green box, which won\'t be affected by a rethrow. Once you are happy with your dice or you are out of throws you can click on the row you would like to save the results in. This will lock this column for the rest of the game.'))),r.a.createElement(x.a,null,r.a.createElement(v.a,{variant:"outline-primary",onClick:function(){return e.logOut()}},"Log out"))),r.a.createElement(g.a,{style:{margin:"auto"},bg:"light",expand:"lg"},r.a.createElement(g.a.Brand,{style:{margin:"auto"},href:""},"Yatzy")),r.a.createElement(b.a,{horizontal:!0},r.a.createElement(b.a,null,r.a.createElement(O.a,{style:{background:"red",height:"150px",width:"40rem"}},r.a.createElement(O.a.Title,null,"Dice on board (These will be rerolled)"),r.a.createElement(N.a,null,this.dice.terninger.map((function(t,a){return r.a.createElement(w.a,{xs:"auto"},r.a.createElement(k.a,{onClick:function(){return e.saveDice({index:a})},className:"picture",src:"/imagefolder/".concat(t,".png"),rounded:"rounded"}))})))),r.a.createElement(O.a,{style:{background:"green",height:"150px",width:"40rem"}},r.a.createElement(O.a.Title,null,"Chosen dice (These won't be rerolled)"),r.a.createElement(N.a,null,this.dice.savedDice.map((function(t,a){return r.a.createElement(w.a,{xs:"auto"},r.a.createElement(k.a,{onClick:function(){return e.removeDice({index:a})},className:"picture",src:"/imagefolder/".concat(t,".png"),rounded:"rounded"}))}))))),r.a.createElement(O.a,{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(O.a.Title,{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("h1",{style:{margin:"auto",fontSize:"10rem"}},this.state.response.score)))),r.a.createElement(O.a.Header,{style:{display:"flex"}},r.a.createElement(v.a,{style:{margin:"auto",width:"12.5rem"},variant:"outline-secondary",onClick:this.rollDice},"Roll dice, ",this.dice.attempts," attempts remaining")),r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(O.a.Title,null,"test"),r.a.createElement(y.a,{variant:"dark",striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,r.a.createElement("tr",{onClick:function(){return e.saveRound("ones")}},r.a.createElement("td",{className:"td"},"Ones"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"ones",className:"td noborder"},this.state.response.ones),r.a.createElement("td",{className:"cursive"},"(",this.results.ones,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("twos")}},r.a.createElement("td",{className:"td"},"Twos"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"twos",className:"td noborder"},this.state.response.twos),r.a.createElement("td",{className:"cursive"},"(",this.results.twos,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("threes")}},r.a.createElement("td",{className:"td"},"Threes"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"threes",className:"td noborder"},this.state.response.threes),r.a.createElement("td",{className:"cursive"},"(",this.results.fours,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("fours")}},r.a.createElement("td",{className:"td"},"Fours"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"fours",className:"td noborder"},this.state.response.fours),r.a.createElement("td",{className:"cursive"},"(",this.results.fours,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("fives")}},r.a.createElement("td",{className:"td"},"Fives"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"fives",className:"td noborder"},this.state.response.fives),r.a.createElement("td",{className:"cursive"},"(",this.results.fives,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("sixes")}},r.a.createElement("td",{className:"td"},"Sixes"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"sixes",className:"td noborder"},this.state.response.sixes),r.a.createElement("td",{className:"cursive"},"(",this.results.sixes,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("one_pair")}},r.a.createElement("td",{className:"td"},"One Pair"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"one_pair",className:"td noborder"},this.state.response.one_pair),r.a.createElement("td",{className:"cursive"},"(",this.results.one_pair,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("two_pairs")}},r.a.createElement("td",{className:"td"},"Two pairs"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"two_pairs",className:"td noborder"},this.state.response.two_pairs),r.a.createElement("td",{className:"cursive"},"(",this.results.two_pairs,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("triplet")}},r.a.createElement("td",{className:"td"},"Triplets"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"triplet",className:"td noborder"},this.state.response.triplet),r.a.createElement("td",{className:"cursive"},"(",this.results.triplet,")"))),r.a.createElement("tr",{className:"test",onClick:function(){return e.saveRound("four_of_a_kind")}},r.a.createElement("td",{className:"td"},"Four of a kind"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"four_of_a_kind",className:"td noborder"},this.state.response.four_of_a_kind),r.a.createElement("td",{className:"cursive"},"(",this.results.four_of_a_kind,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("small_straight")}},r.a.createElement("td",{className:"td"},"Small Straight"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"small_straight",className:"td noborder"},this.state.response.small_straight),r.a.createElement("td",{className:"cursive"},"(",this.results.small_straight,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("large_straight")}},r.a.createElement("td",{className:"td"},"Large Straight"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"large_straight",className:"td noborder"},this.state.response.large_straight),r.a.createElement("td",{className:"cursive"},"(",this.results.large_straight,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("chance")}},r.a.createElement("td",{className:"td"},"Chance"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"chance",className:"td noborder"},this.state.response.chance),r.a.createElement("td",{className:"cursive"},"(",this.results.chance,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("Yatzy")}},r.a.createElement("td",{className:"td"},"Yatzy"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"yatzy",className:"td noborder"},this.state.response.yatzy),r.a.createElement("td",{className:"cursive"},"(",this.results.Yatzy,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("full_house")}},r.a.createElement("td",{className:"td"},"Full house"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"full_house",className:"td noborder"},this.state.response.full_house),r.a.createElement("td",{className:"cursive"},"(",this.results.full_house,")")))))),r.a.createElement(O.a,null,r.a.createElement(y.a,{variant:"dark",striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,r.a.createElement("tr",{onClick:function(){return e.saveRound("ones")}},r.a.createElement("td",{className:"td"},"Ones"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"ones",className:"td noborder"},this.state.response.ones),r.a.createElement("td",{className:"cursive"},"(",this.results.ones,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("twos")}},r.a.createElement("td",{className:"td"},"Twos"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"twos",className:"td noborder"},this.state.response.twos),r.a.createElement("td",{className:"cursive"},"(",this.results.twos,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("threes")}},r.a.createElement("td",{className:"td"},"Threes"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"threes",className:"td noborder"},this.state.response.threes),r.a.createElement("td",{className:"cursive"},"(",this.results.fours,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("fours")}},r.a.createElement("td",{className:"td"},"Fours"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"fours",className:"td noborder"},this.state.response.fours),r.a.createElement("td",{className:"cursive"},"(",this.results.fours,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("fives")}},r.a.createElement("td",{className:"td"},"Fives"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"fives",className:"td noborder"},this.state.response.fives),r.a.createElement("td",{className:"cursive"},"(",this.results.fives,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("sixes")}},r.a.createElement("td",{className:"td"},"Sixes"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"sixes",className:"td noborder"},this.state.response.sixes),r.a.createElement("td",{className:"cursive"},"(",this.results.sixes,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("one_pair")}},r.a.createElement("td",{className:"td"},"One Pair"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"one_pair",className:"td noborder"},this.state.response.one_pair),r.a.createElement("td",{className:"cursive"},"(",this.results.one_pair,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("two_pairs")}},r.a.createElement("td",{className:"td"},"Two pairs"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"two_pairs",className:"td noborder"},this.state.response.two_pairs),r.a.createElement("td",{className:"cursive"},"(",this.results.two_pairs,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("triplet")}},r.a.createElement("td",{className:"td"},"Triplets"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"triplet",className:"td noborder"},this.state.response.triplet),r.a.createElement("td",{className:"cursive"},"(",this.results.triplet,")"))),r.a.createElement("tr",{className:"test",onClick:function(){return e.saveRound("four_of_a_kind")}},r.a.createElement("td",{className:"td"},"Four of a kind"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"four_of_a_kind",className:"td noborder"},this.state.response.four_of_a_kind),r.a.createElement("td",{className:"cursive"},"(",this.results.four_of_a_kind,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("small_straight")}},r.a.createElement("td",{className:"td"},"Small Straight"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"small_straight",className:"td noborder"},this.state.response.small_straight),r.a.createElement("td",{className:"cursive"},"(",this.results.small_straight,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("large_straight")}},r.a.createElement("td",{className:"td"},"Large Straight"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"large_straight",className:"td noborder"},this.state.response.large_straight),r.a.createElement("td",{className:"cursive"},"(",this.results.large_straight,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("chance")}},r.a.createElement("td",{className:"td"},"Chance"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"chance",className:"td noborder"},this.state.response.chance),r.a.createElement("td",{className:"cursive"},"(",this.results.chance,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("Yatzy")}},r.a.createElement("td",{className:"td"},"Yatzy"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"yatzy",className:"td noborder"},this.state.response.yatzy),r.a.createElement("td",{className:"cursive"},"(",this.results.Yatzy,")"))),r.a.createElement("tr",{onClick:function(){return e.saveRound("full_house")}},r.a.createElement("td",{className:"td"},"Full house"),r.a.createElement("div",{className:"td2"},r.a.createElement("td",{id:"full_house",className:"td noborder"},this.state.response.full_house),r.a.createElement("td",{className:"cursive"},"(",this.results.full_house,")")))))))):r.a.createElement("p",null,"Still loading data")}}]),a}(s.Component),B=Y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),r.a.createElement(j.a,{basename:""},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.95fd5faf.chunk.js.map
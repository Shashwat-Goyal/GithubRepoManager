var React = require('react');

var {browserHistory}= require ('react-router');

var LoginComponent = React.createClass({

checkUser:function(){
var userObj={"username":this.refs.userName.value,"password":this.refs.passWord.value};
$.ajax({

  url:'http://localhost:8085/login',

  type: 'POST',

  data:userObj,

  dataType:"JSON",

  success: function(data)

  {

 console.log("Ajax login success");

   browserHistory.push('/search');

  }.bind(this),

  error: function(err)

  {

    console.log(err);

  }.bind(this)

});

},

render : function () {

  return(

    <div className="container" style={{marginTop:'100'}}>

      <div className="jumbotron">

        <h2 style={{textAlign:'center', color:'#0000A0'}}> Welcome to GitHub Repository Manger Application </h2>
        <br></br>
        <img src="https://enterprise.github.com/assets/aws/jetpack-octocat-airlock-b4e1d022c0113c997328f6598d16e58ad049140e50da4859d6b4d174890bb1c8.jpg" className="img-responsive"></img>
        
      </div>

        <h3 className="form-signin-heading">Please LOGIN and Enter into a new world of GitHub </h3>

        <div className="row">
        <div className="col-lg-9">
        <div className="input-group input-group-md">

            <span className="input-group-addon">Username</span>

            <input type="text" ref='userName' className="form-control"></input>

        </div>

        <br></br>
        
        <div className="input-group input-group-md">

            <span className="input-group-addon">Password</span>

            <input type="password" ref='passWord' className="form-control"></input>

        </div>

        <br></br>

        <button onClick={this.checkUser} className="btn btn-md btn-primary btn-block">LOGIN</button>

        <br></br>
        </div>
        </div>
    </div>

  )

  }

  });
module.exports = LoginComponent;

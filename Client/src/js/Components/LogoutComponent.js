var React = require('react');
var {browserHistory}= require ('react-router');
var LogoutComponent = React.createClass({
 logout(){
   $.ajax({
     url:'http://localhost:8085/logout',
     type: 'GET',
     success: function(data)
     {
    console.log("Ajax logout success");
      browserHistory.push('/');
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });
 },
componentDidMount:function(){
   this.logout();
},
 render : function () {
   return(
      <div>
      <h1>User logging out</h1>
</div>
   )
 }
});

module.exports = LogoutComponent;

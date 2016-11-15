var React=require('react');
var ReactDOM=require('react-dom');
var Route=require('react-router').Route;
var Router=require('react-router').Router;
var {browserHistory}= require ('react-router');
var IndexRoute=require('react-router').IndexRoute;
var hashHistory=require('react-router').hashHistory;
var LoginComponent=require('./Components/LoginComponent');
var SignUp=require('./Components/SignUp');
var LogoutComponent=require('./Components/LogoutComponent');
var MainComponent=require('./Components/MainComponent');
var About=require('./Components/About');
var ParentComponent=require('./Components/ParentComponent');
var Examples=require('./Components/Examples');
var GetFavouriteRepositories=require('./Components/GetFavouriteRepositories');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainComponent}>
		<Route path="search" component={ParentComponent}></Route>
			<Route path="SignUp" component={SignUp}></Route>
		<Route path="LogoutComponent" component={LogoutComponent}></Route>
		<Route path="about" component={About}></Route>
		<Route path="examples" component={Examples}></Route>
		<Route path="getFavourites" component={GetFavouriteRepositories}></Route>
		<IndexRoute component={LoginComponent}></IndexRoute>
		</Route>
	</Router>,
	document.getElementById('app')); //puts the virtual dom & injects into the main physical DOM.

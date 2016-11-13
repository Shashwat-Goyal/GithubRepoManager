var React=require('react');
var NavComponent=require('./Nav');

var MainComponent=React.createClass({
	render:function(){
		return (
			<div>
			<NavComponent />
			{this.props.children}
			</div>
			);
		}
	});

	module.exports=MainComponent;


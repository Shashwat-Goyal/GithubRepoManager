var React=require('react');
var ModalUpdate=require('./ModalUpdate');
var FavouriteRepoDisplay=React.createClass({

	handleUpdate:function(repoID, Description){
		alert(repoID+" "+Description);
		this.props.updateCall(repoID, Description)
	},

	DeleteRepo:function(){
		alert('Entering Delete');
		this.props.onDelete(this.props.RepoObj.repoID, this.props.RepoObj.Category);
	},

	render:function(){
		console.log(this.props.RepoObj);
		var privacy=this.props.RepoObj.Access;
		var PrivateMessage='';
		if(privacy===false){
			PrivateMessage="This Repository is available for public";
		}
		else{
			PrivateMessage="This Repository is a private Repository";
		}
		return (
			<div>
			<div className="container">
			<div className="row">
			<div className="col-lg-11 col-offset-1 col-md-3">
			<div className="panel-group" id="accordion">
			<div className="panel panel-default">
			<div className="panel-heading">
			<h4 className="panel-title" style={{textAlign:"center"}}>
			<a data-toggle="collapse" data-parent="#accordion" href={'#'+this.props.RepoObj.repoID+'a'}><span class="glyphicon glyphicon-folder-close">
			</span>{this.props.RepoObj.Name}</a>
			</h4>
			</div>
			<div id={this.props.RepoObj.repoID+'a'} className="panel-collapse collapse">
			<div className="panel-body">
			<div className="row" style={{backgroundColor:"#74AFAD"}}>
			<div className="col-offset-1 col-lg-4">
			<img src={this.props.RepoObj.Avatar} alt="Poster Image" height="300" width="300" style={{marginTop:'20'}}></img>
			</div>
			<div className="col-lg-6">
			<h1>{this.props.RepoObj.Name}</h1>
			<p className="lead"><span style={{textDecoration:'underline'}}> Repository ID </span>: {this.props.RepoObj.repoID}</p>
			<p className="lead"> Repository Name: {this.props.RepoObj.Name}</p>
			<p className="lead"> Description: {this.props.RepoObj.Description}</p>
			<p className="lead"> Stars: {this.props.RepoObj.Stars}</p>
			<button className="btn btn-warning" role="button" data-toggle="modal" data-target={'#'+this.props.RepoObj.repoID} > Update Repository <span className="glyphicon glyphicon-retweet"></span></button>&nbsp;&emsp;
			<button className="btn btn-danger" onClick={this.DeleteRepo} > Delete <span className="glyphicon glyphicon-trash"></span></button>
			<br></br>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			<br></br>
			<hr></hr>
			<ModalUpdate id={this.props.RepoObj.repoID} category={this.props.RepoObj.Category} onUpdate={this.handleUpdate}></ModalUpdate>
			</div>
			);
		}
});

module.exports=FavouriteRepoDisplay;
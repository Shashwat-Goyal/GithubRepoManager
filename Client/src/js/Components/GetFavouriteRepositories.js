var React=require('react');

var GetFavouriteRepositories=React.createClass({

	getInitialState:function(){
		return({SelectOptions:[], value:'select'})
	},
	
	componentDidMount:function(){
		var url="http://localhost:8085/repos/GetCategoryOptions";
		$.ajax({
			url:url,
			type:'GET',
			dataType:'JSON',
			success:function(data){
				console.log(data);
				this.setState({SelectOptions:data});

			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	GetCategoryFavourites:function(event){
		alert(event.target.value);
		var categoryObj={};
		categoryObj.category=event.target.value;
		this.setState({value:event.target.value});
		var url="http://localhost:8085/repos/GetCategoryFavourites";
		$.ajax({
			url:url,
			type:'POST',
			data:categoryObj,
			dataType:'JSON',
			success:function(data){
				console.log(data);
			}.bind(this),
			error:function(err){
				console.log(err);	
			}.bind(this)
		});
	},

	render:function(){
		
		
		console.log(this.state.SelectOptions.length);
		var SelectListArr=this.state.SelectOptions.map(function(option){
			console.log('entering');
			return(<option value={option}>{option}</option>);
		});
		console.log(SelectListArr);
		return(
			<div style={{marginTop:'100', textAlign:'center'}}>
				<select id='myList' onChange={this.GetCategoryFavourites}>
					<option value="Select">Select</option>
					{SelectListArr}
				</select>

			</div>
			);
	}
});

module.exports=GetFavouriteRepositories;

var myData = 
{
	title:{
		"link":"http://www.baidu.com",
		"name":"hello world"
	},
	list:[
		{
			"link":"http://www.baidu.com",
			"name":"hello world"
		},
		{
			"link":"http://www.baidu.com",
			"name":"hello world"
		},
		{
			"link":"http://www.baidu.com",
			"name":"hello world"
		},
		{
			"link":"http://www.baidu.com",
			"name":"hello world"
		},
		{
			"link":"http://www.baidu.com",
			"name":"hello world"
		}
	]
}

var SecondNavTitle = React.createClass({

	render: function() {
		return (
			<a className="navbar-brand" href={this.props.title.link}>{this.props.title.name}</a>
		);
	}
});

var SecondNavList = React.createClass({

	render: function() {
		var lists = this.props.lists;
		return (
			<ul className="nav navbar-nav">
			{
				lists.map(function(list,index) {
					return (<li key={index}><a href={list.link}>{list.name}</a></li>)
				})

			}
            </ul>
		);
	}

});

var SecondNav = React.createClass({
	render: function() {
		var data = this.props.data
		return (
				<div className="navbar">
		            <div className="container-fluid">
		                <SecondNavTitle title={data.title}/>
		                <SecondNavList lists ={data.list}/>
		            </div>
		        </div>
		);
	}

});

ReactDOM.render(
	<SecondNav data={myData} />,
  	document.getElementById('secondNavBar')
);


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
		// console.log(data)
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
var Nav = React.createClass({

	getInitialState: function() {
		return (this.props.data.Project)
	},
	componentDidMount: function() {
		var _self = this
		$(".firstNav li").hover(function() {
			// $("#secondNavBar").css('display', 'block');
			var nowState = _self.props.data[$(this).attr('id')]
			_self.setState(
				_self.props.data[$(this).attr('id')]
			);
		}, function() {
			// $("#secondNavBar").css('display', 'none');
			_self.setState(
				_self.props.data.Project
			);
		});
	},
	render: function() {
		return (
			<SecondNav data={this.state} />
		);
	}

});
ReactDOM.render(
	<Nav data={navData} />,
  	document.getElementById('secondNavBar')
);


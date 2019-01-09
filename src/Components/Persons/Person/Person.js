import React,{Component}from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
// Radium is default export and StyleRoot is named default
class Person extends Component {
	 constructor(props){
    super(props);//component is called and with papams passed to app to make sure app is an instance of comp
    console.log('[Person.js] inside constructor',props);//Normally react calls super but when we create
    //we overrwrite react's default
    //this.state = initialse like below will work in older versions
  }

  componentWillMount(){
    console.log('[Person.js] inside componentWillMount');

  }

  componentDidMount(){
    console.log('[Person.js] inside componentDidMount');
  }
	render(){
		console.log('[Person.js] inside render');
		return ( 
		<WithClass classes={classes.Person}>
		<p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!!</p>
		<p>{this.props.children}</p>
		<input type='text' onChange={this.props.changed} value={this.props.name}/>
		</WithClass>
		)
		// return [
		// 	<p key="1"onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!!</p>,
		// 	<p key="2">{this.props.children}</p>,
		// 	<input key="3" type='text' onChange={this.props.changed} value={this.props.name}/>
		// 	]
	}
}


export default Person;

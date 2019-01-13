import React,{Component}from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
// Radium is default export and StyleRoot is named default
import { AuthContext } from '../../../Containers/App';
class Person extends Component {
	 constructor(props){
    super(props);//component is called and with papams passed to app to make sure app is an instance of comp
    console.log('[Person.js] inside constructor',props);
    //Normally react calls super but when we create
    //we overrwrite react's default
    //this.state = initialse like below will work in older versions
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Person.js] inside componentWillMount');

  }

  componentDidMount(){
    console.log('[Person.js] inside componentDidMount');
    
  }

  focusInput(){
  		this.inputElement.current.focus();
    }
    //current holds the access to the element we stored to the reference or where we assigned the reference
    //to(thateg DOM node or input element)
  
	render(){
		console.log('[Person.js] inside render');
		return ( 
		<Auxiliary>
		<AuthContext.Consumer>
			{ auth => auth ? <p>I am authenticated!!!!!!</p> : null}
		</AuthContext.Consumer>
		<p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!!</p>
		<p>{this.props.children}</p>
		<input 
			ref={ this.inputElement}
			type='text' 
			onChange={this.props.changed} 
			value={this.props.name}/>
		</Auxiliary>
		)
		// return [
		// 	<p key="1"onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!!</p>,
		// 	<p key="2">{this.props.children}</p>,
		// 	<input key="3" type='text' onChange={this.props.changed} value={this.props.name}/>
		// 	]
	}
}

Person.propTypes = {
	click: PropTypes.func ,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};
export default withClass(Person,classes.Person);

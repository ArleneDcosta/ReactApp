import React from 'react';
import classes from './Person.css';
// Radium is default export and StyleRoot is named default

const person = (props) => {

	
	//it will overwrite class setting in the css default format
	return ( 
		<div className={classes.Person}>
		<p onClick={props.click}>Im {props.name} and I am {props.age} years old!!</p>
		<p>{props.children}</p>
		<input type='text' onChange={props.changed} value={props.name}/>
		</div>
		)
};

export default person;
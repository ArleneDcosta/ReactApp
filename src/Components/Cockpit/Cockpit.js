import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = '';
	if(props.showPersons)
	{
	   btnClass = classes.Red;	
	}
	
  if (props.persons.length<=2)
  {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length<=1)
  {
    assignedClasses.push(classes.bold);
  }
  console.log(classes);
	return(
		<div className={classes.Cockpit}>
		<h1>Hi,Im a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>
        <button className={btnClass}         
          onClick={props.togglePersons}>Toggle Persons</button>
         </div>
		);
};


export default cockpit; 

// for list no need div tag and no paranthesis like normal javascript map function and only need to return dire
//ect jsx from map function which is just javascript
//here however not only javascript but also the logic and stuff
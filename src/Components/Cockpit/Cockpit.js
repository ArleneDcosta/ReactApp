import React from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';


const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = classes.Button;
	if(props.showPersons)
	{
	   btnClass = [classes.Button,classes.Red].join(' ');	
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
		<Auxiliary>
		<h1>{props.apptitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>
        <button className={btnClass}         
          onClick={props.togglePersons}>Toggle Persons</button>
         </Auxiliary>
		);
};

//since wrapping div is removed (css class) an array can be returned however another alternative is
export default cockpit; 

// for list no need div tag and no paranthesis like normal javascript map function and only need to return dire
//ect jsx from map function which is just javascript
//here however not only javascript but also the logic and stuff
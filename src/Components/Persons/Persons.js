import React from 'react';

import Person from './Person/Person';


const persons = (props) => props.persons.map((person,index) => { //wrap in an extra paranthesis when more one parameters--index is 
            //callback         //index is a callback from map function 
            //a callback function is a function which starts its execution after a function called completes its execution
            return <Person
            click={() => props.click(index)}
            name={person.name}
            age={person.age}
         	key={person.id}
            changed={(event) => props.changed(event,person.id)} />//earlier it was just a reference and 
            //when event occurred method was called as event was default but here on changed event the anonymous 
            //function gets executed and event is passed as para
            //forEach just mutates doesnt return for an array however map returns 
          });
export default persons;
//here no jsx only pure javascript thus no paranthesis


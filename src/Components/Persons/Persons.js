import React,{PureComponent} from 'react';

import Person from './Person/Person';


class Persons extends PureComponent {
	 constructor(props){
    super(props);//component is called and with papams passed to app to make sure app is an instance of comp
    console.log('[Persons.js] inside constructor',props);//Normally react calls super but when we create
    //we overrwrite react's default
    //this.state = initialse like below will work in older versions
  }

  componentWillMount(){
    console.log('[Persons.js] inside componentWillMount');

  }

  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount');
  }

  componentWillReceiveProps(nextProps){
  	console.log('[UPDATE Persons.js]Inside componentWillReceiveProps',nextProps);

  }
 //  shouldComponentUpdate(nextProps,nextState){
 //  	console.log('[UPDATE Persons.js]Inside shouldComponentUpdate',nextProps,nextState,this.props.persons);
	// return nextProps.persons!==this.props.persons || nextProps.changed!==this.props.changed
	// || nextProps.click !== this.props.click;//updating continues(true) or else stops(false) the whole process

 //  }
//PureComponent aldready has showComponentUpdate method built in which checks automaticallly.


 //this.props determines non-updated or old state and after shouldcomponentupdate will get updated but will render
  //only if true or false
  componentWillUpdate(nextProps,nextState){
  	console.log('[UPDATE Persons.js]Inside componentWillUpdate',nextProps,nextState,this.props.persons);
  }
  
   componentDidUpdate(){
  	console.log('[UPDATE Persons.js]Inside componentDidUpdate',this.props.persons);
  }
	render(){
		console.log('[Persons.js] inside render');
		return this.props.persons.map((person,index) => { //wrap in an extra paranthesis when more one parameters--index is 
            //callback         //index is a callback from map function 
            //a callback function is a function which starts its execution after a function called completes its execution
            return <Person
            click={() => this.props.click(index)}
            name={person.name}
            age={person.age}
         	key={person.id}
            changed={(event) => this.props.changed(event,person.id)} />//earlier it was just a reference and 
            //when event occurred method was called as event was default but here on changed event the anonymous 
            //function gets executed and event is passed as para
            //forEach just mutates doesnt return for an array however map returns 
            //map applies a function on every element in the array.A new array is returned.
          });

	}
} 
export default Persons;
//here no jsx only pure javascript thus no paranthesis
//here above array is returned or rendered (Remember:
//render only creates a virtual dom compares with old dom and makes appropriate changes accordingly)


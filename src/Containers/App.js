import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons:[
    { id:'sjdslsl',name:"Arlene",age:20},
    { id:'bjsjdks',name:'Aaron',age:24},
    { id:'paspapjd',name:'Antony',age:54},
    { id:'asaiksjak',name:'Rita',age:50}
    ],
    showPersons:false
  }

  // switchNameHandler = (newName) => {
  //   //console.log("Button was clicked!!!");
  //   //DONT DO THIS this.state.persons[0].name = 'Arlene Dcosta';
  //   //DONT DO THIS this.state.persons[1].name = 'Aaron Dcosta';
  //   //DONT DO THIS this.state.persons[2].name = 'Antony Dcosta';
  //   this.setState({
  //     persons:[
  //   { name:newName,age:20},
  //   { name:'Aaron Dcosta',age:24},
  //   { name:'Antony Dcosta',age:54}
  //   //{ name:'Rita',age:50}
  //   ]
  //   });
  // }

  namechangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });//similiar to map however doesnt map each element into a new arrar
                                                  //but for each element in the array checks and returns true or false
    const person = {...this.state.persons[personIndex]};//coz only a pointer and mutating through the original with
    //a pointer is not a good practise and not manipulating og but a copy
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();//since constant why updation====because persons is only a pointer so np and 
    const persons = [...this.state.persons];//objects from the old array but into a new array
    persons.splice(personIndex,1);    //usually iterates through individual array but splice makes an array and stores
    this.setState({persons:persons}) //pushing and popping is allowed in const
  }

  render() {
    

  let persons = null;
  
  // only for list or else can be carried out that the respective pages
  if(this.state.showPersons){
    persons = 
        <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.namechangedHandler}/>

      }

  
    return (
    
      <div className={classes.App}>
          <Cockpit 
          apptitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersons={this.togglePersonsHandler}/>
          {persons}
      </div>
    
    ); 
     // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,Im a React App!!!!'));
  }
}

export default App;
//higher order component
//wrapping ur component into the higher order component adding a 
//specific functionality to ur component class as well as functional 
//component


























// this.switchNameHandler() DONT DO THIS because ur only refering to the properties of the App class instead of executing the function.If parenthesized
// it would execute immediately once react renders it to the dom and a copy of the original function is given to the method.U cannot make switchNameHandler as a function like ES5 because when u use this 
// inside it , it will call switchNameHandler object but u want App class object.   
// onClick = {() => return this.switchNameHandler(newName) }
//   Even though previously it was adviced not to use switchNameHandler() but here it is used because here an arrow function which will executed
//   only on onClick so the arrow was initialised at the beginning only on the onClick method the arrow function will get executed
// or onClick = { this.switchNameHandler.bind(this,newName) }
//   This inside bind deals with the this.setState
//this refers to the object of the scope where it is called 
//eg:myFunction();;this==window
//var myMethod = function () {
//   console.log(this);
// };

// var myObject = {
//   myMethod: myMethod
// };
// myObject.myMethod() // this === myObject
// myMethod() // this === window
//Bind function == function.bind(object) --har binding or else normal binding when new operator is used 
// bind() returns a new function that is hard-coded to call the original function with the this context set as you specified.
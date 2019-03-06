import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Gurzo", age: 198},
      {name: "Bubu", age: 22},
      {name: "bambino strano", age: 14}
    ]
  }

  switchNameHandler = () => {
    //console.log("Switch was clickd!!");
    // DON'T DO THIS : this.state.persons[1].name = 'Bubyno';
    this.setState(
      {
        persons: [
        {name: "Gurzolino", age: 18},
        {name: "Bububy", age: 21},
        {name: "bambino strano", age: 14}]
      }
    )
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

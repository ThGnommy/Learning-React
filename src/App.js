import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Person name='Gurzo' age='33'/>
      <Person name='Bubu' age='63'>Bubby</Person>

      </div>
    );
  }
}

export default App;

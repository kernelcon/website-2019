import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="container">
          Hello World
        </p>
      </div>
    );
  }
}

export default App;

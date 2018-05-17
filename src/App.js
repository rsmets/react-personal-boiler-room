import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing.js';
import './styling.css';

class App extends Component {
  componentDidMount() {
    //debugger;
  }

  render() {
    return (
      <div className="App">
        <Listing/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

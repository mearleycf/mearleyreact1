import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mike Earley is learning React here...</h1>
        </header>
        <p className="App-intro">
          <ol>
            <li>Paint six dreadball teams</li>
          </ol>
        </p>
      </div>
    );
  }
}

export default App;

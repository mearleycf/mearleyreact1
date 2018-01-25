import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //   class PaintList {
  //   constructor(itemName, numberOfModels){
  //     _itemName = itemName;
  //     _numberOfModels = numberOfModels;
  //   }
  //   itemName(){
  //     return this._itemName;
  //   }
  //   numberOfModels(){
  //     return this._numberOfModels;
  //   }

  //   listItem(){
  //     return `${itemName()}: ${numberOfModels()} models`
  //   }
  // }

  // let neobots = new PaintList('Dreadball NeoBots', 15);
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mike Earley is learning React here...</h1>
        </header>
        <p className="App-intro">
          <ol>
            <li>{this.listItem()}</li>
          </ol>
        </p>
      </div>
    );
  }
}

export default App;

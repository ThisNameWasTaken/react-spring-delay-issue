import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Box />
        </header>
      </div>
    );
  }
}

export default App;

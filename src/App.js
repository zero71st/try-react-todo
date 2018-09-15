import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm.React';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Application</h1>
        </header>
        <p className="App-intro">
          <TodoForm/>
        </p>
      </div>
    );
  }
}

export default App;

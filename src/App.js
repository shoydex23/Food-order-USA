import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import Header from './components/Header';
import { DISHES } from './shared/dishes';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: DISHES,
    }
  }

  render() {
    return (
      <div>
        {/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
    </div>*/}
    <Header />
    <Menu dishes={this.state.dishes}/>
    </div>

    );
  }
}

export default App;

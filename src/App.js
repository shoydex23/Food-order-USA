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
      <Header />
      <Menu dishes={this.state.dishes}/>
    </div>
    );
  }
}

export default App;

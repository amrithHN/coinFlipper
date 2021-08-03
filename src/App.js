import React, { Component } from 'react'
import './App.css'
import CoinComponent from './CoinComponent';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      coin: 0,
    }


  }
  render() {
    return (
      <div className="CoinFlipper">
        <h1> Welcome Coin Flipper !</h1>
        <CoinComponent></CoinComponent>
      </div>
    )
  }
}

export default App

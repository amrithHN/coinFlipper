import React, { Component } from 'react'
import Coin from './Coin';
import './CoinComponent.css'


export class CoinComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nTail: 0,
            nHead: 0,
            nToss: 0

        }
        this.handleClick = this.handleClick.bind(this)

    };


    static defaultProps = {
        coins: [
            { side: "head", ImgSrc: 'https://raw.githubusercontent.com/mapinis/coin-flip/e74bffb0044132f0b88d79e4f329801ddef6de6d/client/src/rec/heads.svg' },
            { side: "tail", ImgSrc: 'https://raw.githubusercontent.com/mapinis/coin-flip/master/client/src/rec/tails.svg' }
        ]

    };


    flipCoin() {

        let val = Math.floor(Math.random() * this.props.coins.length);
        return this.props.coins[val];

    }


    handleClick() {
        const newCoin = this.flipCoin();

        this.setState((st) => {
            return {
                currCoin: newCoin,
                nToss: st.nToss + 1,
                nTail: newCoin.side === "tail" ? st.nTail + 1 : st.nTail,
                nHead: newCoin.side === "head" ? st.nHead + 1 : st.nHead,


            };
        });
    }





    render() {
        return (
            <div className="CoinComponent">
                <h2>Flip a coin</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button className="btn-coin" onClick={this.handleClick} >Flip a coin</button>
                <div>You flipped {this.state.nToss} and {this.state.nHead} Heads and {this.state.nTail} Tails
                </div>
            </div>
        )
    }
}

export default CoinComponent

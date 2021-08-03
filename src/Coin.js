import React, { Component } from 'react'
import './Coin.css'


export class Coin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Coin">
                <img src={this.props.info.ImgSrc}></img>
            </div >
        )
    }
}

export default Coin

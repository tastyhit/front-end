import React, { Component } from 'react';
import InfoContainer from './InfoContainer'

import '../../assets/css/sales.css'

class Sales extends Component {
    constructor() {
        super();
        this.state = {
            user_name: "",
            piece: "",
            first: false,
        }
    }

    clickedA = (e) => {
        this.setState({ piece: "Bong", first: true })
    }
    clickedB = (e) => {
        this.setState({ piece: "Pipe", first: true })
    }

    render() {
        return (
            <div className='form-wrapper'>
                <InfoContainer a={this.clickedA} b={this.clickedB} />
                {this.state.first ? (
                    <div className=''></div>
                ) : null}
            </div>
        )
    }
}


export default Sales;
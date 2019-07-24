import React, { Component } from 'react';
import InfoContainer from './InfoContainer'

import '../../assets/css/sales.css'

class Sales extends Component {
    constructor() {
        super();
        this.state = {
            user: false,
            piece: "",
        }
    }

    clickedA = (e) => {

        this.setState({ piece: "A" })
    }
    clickedB = (e) => {

        this.setState({ piece: "B" })
    }

    render() {
        return (
            <div className='form-wrapper'>
                <InfoContainer a={this.clickedA} b={this.clickedB} />
            </div>
        )
    }
}


export default Sales;
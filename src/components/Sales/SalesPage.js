import React, { Component } from 'react';
import InfoContainer from './InfoContainer'
import CheckOut from './CheckOut'

import '../../assets/css/sales.css'

class Sales extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            piece: "",
            email: "",
            phone: "",
            id: ""
        }
    }

    clickedA = (e) => {
        this.setState({ piece: "Bong", })
    }
    clickedB = (e) => {
        this.setState({ piece: "Pipe", })
    }

    clickedBoth = (e) =>{
        this.setState({piece: "Both"})
    }

    changingState = (info) => {
        console.log(info)
    }

    secondQuestion() {
        if (this.state.piece === 'Bong' || this.state.piece === 'Pipe' || this.state.piece === 'Both') {
            return (
                <CheckOut info={this.changingState} />
            )
        }
        else {
            return (
                null
            )
        }
    }

    render() {
        return (
            <div className='form-wrapper'>
                <InfoContainer a={this.clickedA} b={this.clickedB} c={this.clickedBoth} glass={this.state.piece} />
                {this.secondQuestion()}

            </div>
        )
    }
}


export default Sales;
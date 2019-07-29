import React, { Component } from 'react';
import InfoContainer from './InfoContainer'
import PlanSelction from './PlanSelection'

import '../../assets/css/sales.css'

class Sales extends Component {
    constructor() {
        super();
        this.state = {
            user_name: "",
            piece: "",
        }
    }

    clickedA = (e) => {
        this.setState({ piece: "Bong", })
    }
    clickedB = (e) => {
        this.setState({ piece: "Pipe", })
    }

    secondQuestion() {

        if (this.state.piece === 'Bong') {
            return (

                <PlanSelction />

            )
        } else if (this.state.piece === 'Pipe') {
            return (
                <InfoContainer />
            )
        } else {
            return (
                null
            )
        }
    }

    render() {
        return (
            <div className='form-wrapper'>
                <InfoContainer a={this.clickedA} b={this.clickedB} />
                {this.secondQuestion()}
                {"should do something here"}
            </div>
        )
    }
}


export default Sales;
import React, { Component } from 'react';


import Zipcode from './Zipcode';
import AgeCheck from './AgeCheck';
import ProductList from '../DashBoard/ProductList';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            agecheck: false
        }
        /*localStorage.clear();*/ //maybe delete
        localStorage.setItem('age', this.state.agecheck)
    }

    ageAlert = (e) => {
        this.setState({ agecheck: true })
        localStorage.setItem('age', true)
    }

    render() {
        return (
            <div className='landing'>

                <div className='top-header'>
                    <h1> Tasty Hits</h1>
                </div>
                <Zipcode />

                {this.state.agecheck ? (
                    null
                ) : <AgeCheck age={this.ageAlert} />}

            </div>
        )
    }

}

export default Landing;
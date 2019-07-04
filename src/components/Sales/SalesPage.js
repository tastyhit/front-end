import React, { Component } from 'react';
import InfoContainer from './InfoContainer' 

import '../../assets/css/sales.css'

class Sales extends Component {
    constructor(){
        super();
        this.state ={
            user: false
        }
    }

    render(){
        return(
            <div className='form-wrapper'>
                <InfoContainer />
            </div>
        )
    }
}


export default Sales;
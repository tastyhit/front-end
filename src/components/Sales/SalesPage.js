import React, { Component } from 'react';
import InfoContainer from './InfoContainer';
import CheckOut from './CheckOut';
import axios from 'axios';

import '../../assets/css/sales.css'

const url ='http://localhost:4000/api/users'

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

    generateOTP(){
        let one = Math.floor((Math.random() * 9) + 1)
        let two = Math.floor((Math.random() * 9) + 1)
        let three = Math.floor((Math.random() * 9) + 1)
        let four = Math.floor((Math.random() * 9) + 1)
        let five = Math.floor((Math.random() * 9) + 1)
        let six = Math.floor((Math.random() * 9) + 1)
        let otp = `${one}${two}${three}${four}${five}${six}`
        return otp
        
    }

    submittingState = (name, email, phone) => {
        this.setState({name: name, email: email, phone: phone})
        const acc = {name, email, phone, zipcode:90280, alive: true, otp:this.generateOTP()}
        console.log(acc)
        axios
        .post(url, acc)
        .then(()=>{
            this.props.history.push('/login')
        })
        .catch(err =>{console.log(err)})
    }


    secondQuestion() {
        if (this.state.piece === 'Bong' || this.state.piece === 'Pipe' || this.state.piece === 'Both') {
            return (
                <CheckOut info={this.submittingState} />
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
                <InfoContainer a={this.clickedA} b={this.clickedB} c={this.clickedBoth} glass={this.state.piece}  />
                {this.secondQuestion()}

            </div>
        )
    }
}


export default Sales;
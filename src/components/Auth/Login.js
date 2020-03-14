import React, { Component } from 'react';
import axios from 'axios';

import logo from '../../assets/images/Finalicon.png';
import '../../assets/css/checkout.css'

const url ='http://localhost:4000/api/users/login'
const auth ='http://localhost:4000/api/users/auth'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextStep: false
        }
    }
    
    inputHandler = (e) =>{
      this.setState({ [e.target.name]: e.target.value });
    }

    authUser = (e) =>{
      e.preventDefault();
      const acc = {phone: this.state.phone}
      axios
      .post(url, acc)
      .then(() =>{
        this.setState({nextStep:true})
      })
      .catch(err=>{console.log(err)})
    }

    authOtp = (e) =>{
      e.preventDefault();
      const acc = {phone: this.state.phone, otp: this.state.otp}
      axios
      .post(auth, acc)
      .then(() =>{
        this.props.history.push('/dashboard')
      })
      .catch(err=>{console.log(err)})
    }

    render() {
        return (
            <div className='login-wrapperbg'>
               <div className='top-bar2'>
                  <img src={logo} alt='Logo' className='yellow' /> 
                </div>
              <div className='login-wrapper'>
                {this.state.nextStep ? (
                      <div className='otp-form'>
                  
                        <h1>Please enter your One Time Password</h1>
                        <input type='text' name='otp' value={this.state.otp} onChange={this.inputHandler} maxLength='6' />
                        <button type='submit' onClick={this.authOtp}>Enter</button>
                    
                    </div>   
                  ):<div className='login-form'>
                  <div className='top-form'>
                      <h1>Log In</h1>
                      <h2>Please Enter your Phone Number</h2>
                  </div>
                      
                      <input type='text' name='phone' placeholder='Phone Number' value={this.state.phone} onChange={this.inputHandler} maxLength='10'/>
                      <button type='submit' onClick={this.authUser}>Enter</button>
                </div>}
              
              </div>
            </div>
        )
    }
}

export default Login;



import React, { Component } from 'react';
import axios from 'axios';

import { Input, Button } from '../../assets/css/layer'
import logo from '../../assets/images/Finalicon.png';
import '../../assets/css/checkout.css'
import USicon from '../../assets/images/usa-icon.jpg'


// const url = 'http://localhost:5000/users/login'
//const auth = 'http://localhost:5000/users/auth'
const url = 'https://tastyhits.herokuapp.com/users/login'
const auth = 'https://tastyhits.herokuapp.com/users/auth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextStep: false,
      loader: false
    }
  }

  inputHandler = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      if (e.target.name === 'phone' || 'otp') {
        this.setState({ [e.target.name]: e.target.value, });
      }

    }
  }



  authUser = (e) => {
    e.preventDefault();
    const acc = { phone: this.state.phone }
    axios
      .post(url, acc)
      .then(() => { 
        this.setState({ nextStep: true})
        this.props.history.push('/dashboard')
      })
      .catch(err => { console.log(err) })
  }

  authOtp = (e) => {
    e.preventDefault();
    const acc = { phone: this.state.phone, otp: this.state.otp }
    axios
      .post(auth, acc)
      .then(() => {
        this.setState({loader: true})
       
      })
      .catch(err => { console.log(err) })
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

              <p>Please enter your One Time Password(OTP)</p>
              <div className='otp-input'>
                <Input type='text' name='otp' value={this.state.otp || ''} onChange={this.inputHandler} maxLength='6' />
              </div>
              {this.state.loader ? (
                  <div className="loader"></div>
                  ) : <Button primary type='submit' onClick={this.authOtp}>Enter</Button>}
              



            </div>
          ) : <div className='login-form'>
              <div className='top-form'>
                <h1>Sign In</h1>
                <h2>Please Enter your Phone Number</h2>
              </div>
              <div className='bottom-form'>
                <div className='phone'>
                  <div className='usphone'>
                    <img src={USicon} alt='usicon' className='usicon' />
                    <h1> +1</h1>
                  </div>

                  <Input type='text' name='phone' placeholder='Phone Number' value={this.state.phone || ''} onChange={this.inputHandler} maxLength='10' />
                </div>
                <p>We'll send a text to verify your phone</p>
                <p>By clicking next you agree to TastyHit's Terms and Conditions and Privacy Policy</p>
                {this.state.loader ? (
                  <div className="loader"></div>
                  ) : <Button primary type='submit' onClick={this.authUser}>Next</Button>}
                
              </div>

            </div>}

        </div>
      </div>
    )
  }
}

export default Login;



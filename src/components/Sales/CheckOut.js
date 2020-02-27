import React from 'react';

import { Input, Button } from '../../assets/css/layer'
import styled from 'styled-components';
import '../../assets/css/checkout.css'

const EnterButton = styled(Button)`
  background-color: rgb(250, 202, 24);
  border:none;
  border-radius:  3em 3em ;
  font-size:1.5em;
  font-weight:bold;
  padding:.8em;

`;

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      sent: false,
      formErrors: {fname:'', lname:'', number:'', email:'' },
      emailValid: false,
      numberValid: false,
      formValid: false
   };
  }

  addInfo = e => {
    
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) }); 
  }

  validateField(fieldName, value){
    let fieldValidationErrors  = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let numberValid = this.state.numberValid;
    
    switch(fieldName){
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'number':
        numberValid = value.length > 10;
        fieldValidationErrors.number = numberValid ? '': ' is to short';
        break;
      default:
        break;  

    }
    this.setState({formErrors: fieldValidationErrors, emailValid: emailValid, numberValid:numberValid}, this.validateForm)
  }


  sendInfo = (e) => {
    e.preventDefault();
    console.log("sent")
    // let templateId = 'template_bhxhQxe2'
    // let name = this.state.fname + " " + this.state.lname
    // console.log(name)
    // let info = `Name: ${name} <br> Number: ${this.state.number} <br> Address: ${this.state.address}`
    // this.props.info(info)
    // this.setState({sent: true})
    // this.sendFeedback(templateId, {message_html: info,to_name:'Tastyyy', from_name: name, reply_to: 'victorgordian103@gmail.com'})
  }


  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
        this.setState({sent: false})
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  


  render() {
    return (
      <div className='contactInfo'>
        <form className='contactForm'>
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className='name'>
          <Input primary placeholder='First Name' type='text' name='fname' required="required" onChange={this.addInfo} />
          <Input primary placeholder='Last Name' type='text' name='lname' required="required"  onChange={this.addInfo} />
          </div>
          <Input primary placeholder='Phone Number' type='text' required="required" name='number' maxLength='10' onChange={this.addInfo} />
          <Input primary placeholder='Email' type='text' name='email' required="required" onChange={this.addInfo} />
          
          {this.state.sent ? (
                     <div class="loader"></div> 
                ):<EnterButton type='submit' disable={!this.state.formValid} > Enter </EnterButton>}
          
        </form>
      </div>
    )
  }

}

const FormErrors = ({formErrors}) =>
  <div>
    {Object.keys(formErrors).map((fieldName, i) =>{
      if(formErrors[fieldName].length > 0){
        return(
        <p key={i}>{fieldName}{formErrors[fieldName]}</p>
        )
      }else {
        return '';
      }
    })}
  </div>

export default CheckOut;
import React from 'react';

import { Input, Button } from '../../assets/css/layer'
import styled from 'styled-components';
import '../../assets/css/checkout.css'
import USicon from '../../assets/images/usa-icon.jpg'

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
      sentEmail: false,
      formErrors: { number:'', email:'' },
      emailValid: false,
      numberValid: false,
      formValid: false,
      loader: false

   };
  }

  handleUserInput = e => {
    
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
        numberValid = value.length > 9;
        fieldValidationErrors.number = numberValid ? '': ' is to short';
        break;
      default:
        break;  

    }
    this.setState({formErrors: fieldValidationErrors, emailValid: emailValid, numberValid:numberValid}, this.validateForm)
  }

  validateForm(){
    this.setState({formValid: this.state.emailValid && this.state.numberValid});
  }

  capitlize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  sendInfo = (e) => {
    e.preventDefault();
    if(this.state.formValid === true){
      let name = this.state.fname + " " + this.state.lname
      this.props.info(name, this.state.email, this.state.number, true)
      let customer_templateId = 'template_bhxhQxe2'
      let info = `Name: ${name} <br> Number: ${this.state.number}}`
      this.setState({loader: true})
      this.sendFeedback(customer_templateId, {info,to_name:this.capitlize(this.state.fname), email: this.state.email})
    }else{
      console.log(this.state.formValid)

    }
    
  }


  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(() => {
        
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  


  render() {
    return (
      <div className='contactInfo'>
        <form className='contactForm'>
          <div className='form-errors'>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className='name'>
          <Input primary placeholder='First Name' type='text' name='fname' required="required" onChange={this.handleUserInput} />
          <Input primary placeholder='Last Name' type='text' name='lname' required="required"  onChange={this.handleUserInput} />
          </div>
          <div className='phone'>
            <div className='usphone'>
              <img src={USicon} alt='usicon' className='usicon'/>
              <h1> +1</h1>  
            </div>
         
          <Input  placeholder='Phone Number' type='text' required="required" name='number' maxLength='10' onChange={this.handleUserInput} />
          </div>
          <Input primary placeholder='Email' type='text' name='email' required="required" onChange={this.handleUserInput} />
          
          {this.state.loader ? (
                     <div className="loader"></div> 
                ):<EnterButton type='submit' disable={!this.state.formValid}  onClick={this.sendInfo}> Enter </EnterButton>}
          
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
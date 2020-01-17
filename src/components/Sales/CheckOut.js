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
      sent: false
   };
  }

  addInfo = e => {
    this.setState({ value: e.target.value })
    if (e.target.name === 'fname') {
      this.setState({ fname: e.target.value })
    } else if (e.target.name === 'lname') {
      this.setState({ lname: e.target.value })
    } else if (e.target.name === 'number') {
      this.setState({ number: e.target.value })
    } else if (e.target.name === 'address') {
      this.setState({ address: e.target.value })
    }
  }

  sendInfo = (e) => {
    e.preventDefault();
    let templateId = 'template_bhxhQxe2'
    let name = this.state.fname + " " + this.state.lname
    console.log(name)
    let info = `Name: ${name} <br> Number: ${this.state.number} <br> Address: ${this.state.address}`
    this.props.info(info)
    this.setState({sent: true})
    this.sendFeedback(templateId, {message_html: info,to_name:'Tastyyy', from_name: name, reply_to: 'victorgordian103@gmail.com'})
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
          <Input primary placeholder='First Name' type='text' name='fname' onChange={this.addInfo} />
          <Input placeholder='Last Name' type='text' name='lname' onChange={this.addInfo} />
          <Input placeholder='Phone Number' type='text' name='number' onChange={this.addInfo} />
          <Input placeholder='Address' type='text' name='address' onChange={this.addInfo} />
          {this.state.sent ? (
                     <div class="loader"></div> 
                ):<EnterButton type='submit' onClick={this.sendInfo}> Enter </EnterButton>}
          
        </form>
      </div>
    )
  }

}

export default CheckOut;
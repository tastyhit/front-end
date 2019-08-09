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
    this.state = { value: '' };
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
    let name = this.state.fname + this.state.lname
    console.log(name)
    let info = [name, this.state.number, this.state.address]
    this.props.info(info)
  }

  render() {
    return (
      <div className='contactInfo'>
        <form className='contactForm'>
          <Input primary placeholder='First Name' type='text' name='fname' onChange={this.addInfo} />
          <Input placeholder='Last Name' type='text' name='lname' onChange={this.addInfo} />
          <Input placeholder='Phone Number' type='text' name='number' onChange={this.addInfo} />
          <Input placeholder='Address' type='text' name='address' onChange={this.addInfo} />
          <EnterButton type='submit' onClick={this.sendInfo}> Enter </EnterButton>
        </form>
      </div>
    )
  }

}

export default CheckOut;
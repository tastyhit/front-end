import React from 'react';

import { Input } from '../../assets/css/layer'

import '../../assets/css/checkout.css'

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

  sendInfo(props) {
    let name = this.state.fname + this.state.lname
    props.
  }

  render() {
    return (
      <div className='contactInfo'>
        <form onClick={this.state.sendInfo}>
          <Input primary placeholder='First Name' type='text' name='fname' onChange={this.addInfo} />
          <Input placeholder='Last Name' type='text' name='lname' onChange={this.addInfo} />
          <Input placeholder='Phone Number' type='text' name='number' onChange={this.addInfo} />
          <Input placeholder='Address' type='text' name='address' onChange={this.addInfo} />
        </form>
      </div>
    )
  }

}

export default CheckOut;
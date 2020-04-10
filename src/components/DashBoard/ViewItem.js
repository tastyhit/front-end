import React, { Component } from 'react';

import '../../assets/css/sales.css'


class ViewItem extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }



  render() {
    return (
      <div className='view-item'>
        <h1>Hey</h1>
      </div>
    )
  }
}


export default ViewItem;
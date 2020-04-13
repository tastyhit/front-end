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
        <div className='img-item'>
          <img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' />
        </div>
        <div>
          <h1>Brand Name</h1>
          <h1>Beaker</h1>
          <h1>Price</h1>
          <button>Add to Cart</button>

          <div>
            This is the classic beaker tube by Maverick Glass. This 18'' tall bong features a 18mm to 14mm removable diffused downstem and comes with a 14mm male bowl. The ice pinch allows you to stack ice for an extra level of cooling. This highly functional bong will be sure to please and may quickly become your daily driver. The glass is 5mm thick. Made by Maverick Glass in California using high quality borosilicate glass.
          </div>
          <div>
            <p>Beaker Base Bong</p>
            <p>18mm to 14mm Diffused Downstem</p>
            <p>14mm Male bowl</p>
            <p>Ice Pinch</p>
            <p>18'' Inches Tall</p>
            <p>5mm Thick</p>
          </div>
        </div>
      </div>
    )
  }
}


export default ViewItem;
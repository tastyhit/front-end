import React, { Component } from 'react';

import logo from '../../assets/images/Finalicon.png';
import '../../assets/css/sales.css'
import '../../assets/css/checkout.css'

import { Button } from '../../assets/css/layer'

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
        <div className='top-bar2'>
          <img src={logo} alt='Logo' className='yellow' />
        </div>

        <div className='imgItem-wrapper'>

          <div className='img-item'>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
            <div className='item-img'><img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' /></div>
          </div>


        </div>


        <div className='detail-wrapper'>
          <div className='item-description'>

            <div className='price-name'>
              <h2>$ 89.99</h2>
              <h1>USA Bent Neck Bong</h1>
            </div>
            <div className='location'>
              <h2>South Gate</h2>
            </div>


            <div className='summary'>
              This is the classic beaker tube by Maverick Glass. This 18'' tall bong features a 18mm to 14mm removable diffused downstem and comes with a 14mm male bowl. The ice pinch allows you to stack ice for an extra level of cooling. This highly functional bong will be sure to please and may quickly become your daily driver. The glass is 5mm thick. Made by Maverick Glass in California using high quality borosilicate glass.
          </div>
            <div className='details'>
              <p>•Beaker Base Bong</p>
              <p>•18mm to 14mm Diffused Downstem</p>
              <p>•14mm Male bowl</p>
              <p>•Ice Pinch</p>
              <p>•18'' Inches Tall</p>
              <p>•5mm Thick</p>
            </div>
          </div>
          <div className='right-wrapper'>
            <h1>Tasty Hits Shop</h1>
            <button>Login in</button>
            <button>Sign up</button>
          </div>
        </div>

      </div>
    )
  }
}


export default ViewItem;
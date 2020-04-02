import React from "react";

import '../../assets/css/product.css'


const Product = () => {
  return (
    <div className='prod-wrapper' >
      <div className='circle-wrapper'>
        <div className='circle'>
          <svg width='100%' height='100%' viewBox='0 0 24 24'>
            <circle cx='11' cy='11' r='10' stroke='#00AAE7' stoke-width='2' fill='white' />
            <path d="M12 12h4.1c.5 0 .9-.5.9-1s-.4-.9-.9-.9H12V5.9c0-.5-.5-.9-1-.9s-1 .4-1 .9v4.2H5.9c-.5 0-.9.4-.9.9s.4 1 .9 1H10v4.1c0 .5.4.9 1 .9s1-.4 1-.9V12z" fill="#00AAE7"></path>
          </svg>
        </div>

      </div>

      <img src={require('../../assets/images/beaker-bong-png-5-original.png')} alt='something' />
      <h1>Tasty Hit Shop</h1>
      <p>$60</p>
    </div>
  )
}
export default Product;


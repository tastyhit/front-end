import React, { Component } from 'react';

import '../../assets/css/sales.css'

import Product from './Product'

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }



    render() {
        return (
            <div className='prodDisplay-wrapper'>
                <div className='yellow-bg'>

                    <div className='prodDisplayBG'>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>

            </div>
        )
    }
}


export default ProductList;
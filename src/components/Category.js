import React, { Component } from 'react';

import '../App.css';

class Category extends Component  {
    constructor(){
        super();
        this.state ={
            vendor: false,
            vendee: false
            
        }

    }

    pathClick = (e) =>{
        if(e.target.attributes.name.value === 'something'){
            console.log('something')
        } else if (e.target.attributes.name.value ==='something1'){
            console.log('ok')
        } else {
            return null
        }
        //if e target is vendor then go to that page, if the click is vendee then go there
        this.setState({})
    }

    render(){
        return (
            <div className='category'>
                <div className='options' name='something' onClick={this.pathClick}>Vendor</div>
                <div className='options' name='something1' onClick={this.pathClick}>Vendeee</div>
            </div>
        )
    }
    
}

export default Category;    
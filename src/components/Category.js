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

    ageAlert = (e) =>{
        this.setState({agecheck: true})
        localStorage.setItem('age', true)
    }

    pathClick = (e) =>{
        console.log(e.target.attributes.name.value)
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
                <div className='name1'>
                  <div name='something' onClick={this.pathClick}>Vendor</div>
                  <div name='something1' onClick={this.pathClick}>Vendeee</div>
                </div>
            </div>
        )
    }
    
}

export default Category;    
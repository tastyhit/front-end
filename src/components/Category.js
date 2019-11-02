import React, { Component } from 'react';

class Category extends Component  {
    constructor(){
        super();
        this.state ={
            vendor: false,
            vendee: false
            
        }
        /*localStorage.clear();*/ //maybe delete
        localStorage.setItem('path', this.state.agecheck)
    }

    ageAlert = (e) =>{
        this.setState({agecheck: true})
        localStorage.setItem('age', true)
    }

    render(){
        return (
            <div className='category'>
                <div>
                  <div>Vendor</div>
                  <div>Vendee</div>
                </div>
            </div>
        )
    }
    
}

export default Category;
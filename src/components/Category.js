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

    pathClick = (e) =>{

        //if e target is vendor then go to that page, if the click is vendee then go there
        this.setState({})
    }

    render(){
        return (
            <div className='category'>
                <div>
                  <div onClick={this.pathClick}>Vendor</div>
                  <div onClick={this.pathClick}>Vendeee</div>
                </div>
            </div>
        )
    }
    
}

export default Category;    
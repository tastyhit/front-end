import React, { Component } from 'react';


import Zipcode from './Zipcode';
import NavBar from './NavBar';
import InfoContainer from './InfoContainer';
import AgeCheck from './AgeCheck';

class Landing extends Component  {
    constructor(){
        super();
        this.state ={
            agecheck: false
        }
        /*localStorage.clear();*/ //maybe delete
        localStorage.setItem('age', this.state.agecheck)
    }

    ageAlert = (e) =>{
        this.setState({agecheck: true})
        localStorage.setItem('age', true)
    }



    render(){
        return (
            <div className='landing'>
                <NavBar />
                <div className='top-header'>
                    <h1> Tasty Hits</h1>
                </div>
                <Zipcode />
                <InfoContainer />
                {this.state.agecheck ? (
                    null
                ):<AgeCheck age={this.ageAlert}/>}
            </div>
        )
    }
    
}

export default Landing;
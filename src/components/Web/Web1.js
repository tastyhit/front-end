import React, { Component } from 'react';
import logo from '../../assets/images/flower2.png'
import NavBar from './NavBar';
import '../../assets/css/landing.css'
import ZipCode from '../Landing/Zipcode';

class WebSite extends Component  {
    constructor(){
        super();
        this.state ={
            over21: false,
            
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
            <div className='webpage wb1'>
                <div className='top-bar'>
                    <div class='topBar-left'>
                        <h1>Tasty Hits</h1>
                        <img src={logo} alt='Logo' className='yellow' />
                    </div>
                    <NavBar />     
                </div>
                <div className='zipcode-section' >
                <ZipCode />
                </div>
                
            </div> 
            
        )
    }
    
}


export default WebSite;

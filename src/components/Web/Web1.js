import React, { Component } from 'react';
import logo from '../../assets/images/flower2.png';
import menu from '../../assets/images/menu.png';
import NavBar from './NavBar';
import '../../assets/css/landing.css'
import ZipCode from '../Landing/Zipcode';
import AgeCheck from '../Landing/AgeCheck'

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

    ageAlert = (e) =>{
        this.setState({agecheck: true})
        localStorage.setItem('age', true)
    }

    


    render(){
        let width = window.innerWidth;
        return (
            <div className='webpage wb1'>
                <div className='top-bar'>
                    <div class='topBar-left'>
                        {width > 800 ? <h1>Tasyt Hits</h1> : <h1>TH</h1>}                     
                        <img src={logo} alt='Logo' className='yellow' />
                    </div>
                    {width > 768 ? <NavBar /> : <div className='mobile-menu'> <img src={menu} alt='menu' /></div>}    
                </div>
                <div className='zipcode-section' >
                <ZipCode />
                </div>
                {this.state.agecheck ? (
                    null
                ):<AgeCheck age={this.ageAlert}/>}
            </div> 
            
        )
    }
    
}


export default WebSite;

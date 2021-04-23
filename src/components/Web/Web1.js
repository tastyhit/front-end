import React, { Component } from 'react';
import logo from '../../assets/images/Finalicon.png';
import menu from '../../assets/images/menu.png';
import NavBar from './NavBar';
import '../../assets/css/landing.css'
import ZipCode from '../Landing/Zipcode';
import AgeCheck from '../Landing/AgeCheck'
import { Link } from 'react-router-dom';
import ProductList from '../DashBoard/ProductList';

class WebSite extends Component {
    constructor() {
        super();
        this.state = {
            over21: false,

        }

    }

    pathClick = (e) => {
        if (e.target.attributes.name.value === 'something') {
            console.log('something')
        } else if (e.target.attributes.name.value === 'something1') {
            console.log('ok')
        } else {
            return null
        }
        //if e target is vendor then go to that page, if the click is vendee then go there
        this.setState({})
    }

    ageAlert = (e) => {
        this.setState({ agecheck: true })
        localStorage.setItem('age', true)
    }




    render() {
        let width = window.innerWidth;
        return (
            <div className='webpage wb1'>
                {/* <div className='top-bar'>
                    <div className='topBar-left'>
                        <img src={logo} alt='Logo' className='yellow' />
                    </div>
                    {width > 800 ? <NavBar /> : <div className='mobile-menu'> <img src={menu} alt='menu' /></div>}
                </div> */}

                <div className='top-wrapper'>
                    <div className='title'>
                        <h1>Tasty Hits</h1>
                    </div>

                    <div className='zipcode-section' >
                        <ZipCode />
                    </div>
                </div>
                
                {width > 800 ? null : <div className='login-mobile'><h1>Already have an account? </h1><Link to='/Login'> Log In</Link></div>}
                <ProductList />
                {this.state.agecheck ? (
                    null
                ) : <AgeCheck age={this.ageAlert} />}
            </div>

        )
    }

}


export default WebSite;

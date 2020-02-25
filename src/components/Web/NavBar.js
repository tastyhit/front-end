import React from 'react';
import {Link} from 'react-router-dom';

import { Button } from '../../assets/css/layer'
import '../../assets/css/landing.css'

const NavBar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className='nav-bar'>
                <Link className='box link'><Button >Log in</Button></Link>
                {/*<Link to='/Sign-Up' className='box link'><Button> Sign Up </Button></Link>*/}
                <Link className='box link'><Button >Vendors Join</Button></Link>
            </div>
        </div>
    )
}

export default NavBar;
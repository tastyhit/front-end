import React from 'react';

import { Button } from '../assets/css/layer'
import '../assets/css/landing.css'

const NavBar = () => {
    return (
        <div className='topbar-wrapper'>
            <div className='top-bar'>
                <Button className='box'>Shop</Button>
                <Button className='box' primary>Log in</Button>
            </div>
        </div>
    )
}

export default NavBar;
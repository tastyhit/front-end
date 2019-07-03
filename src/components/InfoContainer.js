import React from 'react';

import { Card } from '../assets/css/layer'

const InfoContainer = (props) => {
    return (
        <div className='info-container'>
            <Card>
                <div className='box-title'>
                    <h1>Buying from Tasty Hits</h1>
                </div>
                <div className='side-side'>
                    <div className='left-side'>
                        <p>Hand Pipes</p>
                        <p>3" $11.00</p>
                        <p>5" $18.00</p>
                    </div>
                    <div className='right-side'>
                        <p>Bongs</p>
                        <p>10" $38.00</p>
                        <p>12" $47.00</p>
                        <p>14" $58.00</p>
                    </div>
                </div>
                <p>You get a glassware that won't cost you a finger.</p>
                <p>1 Free wash to your glassware</p>
                <p>Delivery or Pick-up</p>
                <p>Taxes Included</p>
            </Card>
            <Card>
                <div className='box-title'>
                    <h1>MemberShip</h1>
                </div>
                <ul>
                    <li>
                        <p>Glassware</p>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </li>
                </ul>
            </Card>
            <Card>
                <div className='box-title'>
                    <h1>Bringing your own</h1>
                </div>

                <p>In-Shop Service Price</p>
                <div className='side-side'>
                    <div className='left-side'>
                        <p>Hand Pipes </p>
                        <p>> 4"  $5.00 </p>
                        <p>> 7" $10.00</p>
                    </div>
                    <div className='right-side'>
                        <p>Bongs</p>
                        <p>> 12" $20.00</p>
                        <p>> 24" $30.00</p>
                        <p>> 36" $40.00</p>
                    </div>
                </div>
                <p>Drop off your piece at the shop with a 1-business-day return</p>

            </Card>

        </div>
    )
}

export default InfoContainer;
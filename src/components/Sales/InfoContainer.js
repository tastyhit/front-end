import React from 'react';

import { Card } from '../../assets/css/layer'

const InfoContainer = (props) => {
    return (
        <div className='info-container'>
            <Card>
                <div className='box-title'>
                    <h1>10'' Bongs Retail - $199</h1>
                </div>
                <div className='side-side'>
                    <div className='left-side'>
                        <p>Clumsy</p>
                        <p>$12.00/per month</p>
                    </div>
                    <div className='right-side'>
                        <p>Not Clumsy</p>
                        <p>$4.00/ per month</p>
                    </div>
                </div>
                <p>Goodie Bag: Tasty Hits Whick and Lighter Holder</p>
                <p>1 Free wash to your glassware</p>
                <p>Delivery or Pick-up</p>
                <p>Taxes Included</p>
            </Card>
            <Card>
                <div className='box-title'>
                    <h1>Pipes Retail - $25</h1>
                </div>
                <div className='side-side'>
                    <div className='left-side'>
                        <p>Clumsy</p>
                        <p>$3.00</p>
                    </div>
                    <div className='right-side'>
                        <p>Not Clumsy</p>
                        <p>$1.00</p>
                    </div>
                </div>
                <p>Drop off your piece at the shop with a 1-business-day return</p>

            </Card>

        </div>
    )
}

export default InfoContainer;
import React from 'react';

import { Card } from '../../assets/css/layer'
import styled from 'styled-components';

const ItemCard = styled(Card)`
    height:auto;
    padding-top:0;
    margin:0;
`;



const InfoContainer = (props) => {
    return (
        <div className='info-container'>
            <div className = 'bong-wrapper'>
                <Card>
                    <div className='box-title'>
                        <h1>10'' Bong retails for $199</h1>
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
                <ItemCard>
                    <img src={require('../../assets/images/try.png')} />
                </ItemCard>
            </div>
           <div className='pipe-wrapper'>
                 
                <Card>
                    <div className='box-title'>
                        <h1>Pipe retails for $25</h1>
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
                    <ItemCard>
                        <img src={require('../../assets/images/trypipe.jpg')} />
                    </ItemCard>
           </div>
           
           

        </div>
    )
}

export default InfoContainer;
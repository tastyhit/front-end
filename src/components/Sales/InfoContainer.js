import React from 'react';

import { Card } from '../../assets/css/layer'
import styled from 'styled-components';

const SectionCard = styled(Card)`
    height:auto;
    border:none;
    padding-left:.3em;
    padding-right:.3em;
`;



const InfoContainer = (props) => {
    function typeClicked(e) {
        e.preventDefault();
        console.log(e.getId())

    }
    return (
        <div className='info-container'>
            <div className='question-title'>
                <h1> How do you like to smoke? *</h1>
            </div>
            <div className='media-wrapper'>
                <div className='selection'>
                    <SectionCard secondary onClick={typeClicked} name='pipe'>
                        <img src={require('../../assets/images/clip.gif')} alt='something' />
                    </SectionCard>
                </div>
                <div className='selection'>

                    <SectionCard secondary onClick={props.b} name='bong'>
                        <img src={require('../../assets/images/clipipe.gif')} alt='something' />
                    </SectionCard>

                </div>
            </div>
        </div>
    )
}

export default InfoContainer;



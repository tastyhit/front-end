import React from 'react';

import { Card } from '../../assets/css/layer'
import styled from 'styled-components';

const SectionCard = styled(Card)`
    height:auto;
    margin-bottom: 0;
    border:none;
`;



const InfoContainer = (props) => {
    return (
        <div className='info-container'>
            <div class='question-title'>
                <h1> How do you like to smoke? Select bong or pipe.</h1>
            </div>

            <div className='selection'>
                <div className='question-wrapper'>
                    <SectionCard secondary>
                        <img src={require('../../assets/images/clip.gif')} alt='something' />
                    </SectionCard>
                </div>
            </div>
            <div className='selection'>
                <div className='question-wrapper'>
                    <SectionCard secondary>
                        <img src={require('../../assets/images/clipipe.gif')} alt='something' />
                    </SectionCard>
                </div>
            </div>
        </div>
    )
}

export default InfoContainer;



import React from 'react';

import { Card } from '../../assets/css/layer'
import styled from 'styled-components';
import '../../assets/css/sales.css'

const SectionCard = styled(Card)`
    height:auto;
    border:none;
    padding-left:.3em;
    padding-right:.3em;
`;



const InfoContainer = (props) => {
    function typeClicked(e) {
        e.preventDefault();
        console.log(e.target.value)
        let vale = e.target.value
        if (vale === "pipe") {
            props.a(e)
        } else {
            props.b(e)
        }
    }
    return (
        <div className='info-container'>
            <div className='question-title'>
                <h1> How do you like to smoke? Bong or Pipe *</h1>
            </div>
            <div className='media-wrapper'>
                <div className='selection'>
                    <SectionCard secondary  >
                        <label htmlFor="survey-question-one">
                            <input type="checkbox" name="piece" value="pipe" id="survey-question-one" onClick={typeClicked} />
                            <img src={require('../../assets/images/clip.gif')} alt='something' />
                        </label>
                    </SectionCard>
                </div>
                <div className='selection'>

                    <SectionCard secondary >
                        <label htmlFor="survey-question-two">
                            <input type="checkbox" name="bong" value="bong" id="survey-question-two" onClick={props.b} />
                            <img src={require('../../assets/images/clipipe.gif')} alt='something' />
                        </label>
                    </SectionCard>

                </div>
            </div>
        </div>
    )
}

export default InfoContainer;



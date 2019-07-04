import React from 'react';

import { Card, Title, Button } from '../assets/css/layer';
import styled, { css } from 'styled-components';


const AgeCard = styled(Card)`
  background:rgb(255, 255, 255) none repeat scroll 0% 0%;
  color: rgba(0,187,255,0.6);
  align-items: center;
  padding:2em 1.5em 0.5em;  
`;

const WButton = styled(Button)`
  background: #00AAE7;
  border:none;
  font-size:.8em;
  color:white;
  ${props =>
    props.secondary &&
    css`
    background:transparent;
    color:#00AAE7;
    border:.1em solid #00AAE7;
    margin-top:.5em;
    `}
  &:hover{
     box-shadow:.1em .1em 1.5em grey;
    }     
`;


const AgeCheck = ({ age, google }) => (
  <div className='agecheck-wrapper'>
    <AgeCard>
      <Title primary>Tasty Hits</Title>
      <div className="text">
        <p>Discover the best way to smoke cannabis, clean.</p>
        <p>You must be atleast 21 years of age to view this site.</p>
      </div>
      <WButton onClick={age}>I'M AT LEAST 21 YEARS OLD</WButton>
      <WButton secondary >I'M NOT 21 YET</WButton>
    </AgeCard>
  </div>



)
export default AgeCheck;
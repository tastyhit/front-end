import styled, { css } from 'styled-components';

//Button

export const Button = styled.button`
    border:0;
    background: transparent;
    border-radius: 0.2em;
    color:black;
    padding: 1.2em;
    cursor: pointer;
    font-weight:600;
    line-height:1.4rem;
    font-size:1.6em;
    width:100%;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    
    ${props =>
    props.primary &&
    css`
        color:white;
        background: #00AAE7;
      `}
    
`;

export const LetterButton = styled.button`
  width: 30px;
  height: 30px;
  font-size:1.8em;
  background: #00AAE7;
  color:white;
  border: none;
  font-weight:bold;    
`;

//Input

export const Input = styled.input`
  display:flex;
  margin:0 auto;
  flex-direction:column;
  background: none;
  border:none;
  border-bottom: 2px solid rgb(255, 195, 0);
  margin-bottom:1em;
  font-size: 2em;
  letter-spacing:1px;
  color: black;
  ::placeholder {
    color: grey;

    

  }
  :focus {
    outline:none;
    border-bottom: 2px solid black;

  }
  ${props =>
    props.primary &&
    css`
    color:black
    ::placeholder{
      color:black;
    }
    `}
  ${props =>
    props.secondary &&
    css`
      border:none;
      margin-bottom:0px;
      color:black;
      :focus {
        color:black;
    
      }
    
    `} 
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid rgba(0,187,255,0.6);
  border-radius: .2em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  color:#FFFFFF;
  font-size:1.5em;
  line-height: 1.7em;

  ${props =>
    props.primary &&
    css`
    justify-content:baseline;
    
    `}
  ${props =>
    props.secondary &&
    css`
    height:auto;
  
  `}  
`

export const Form = styled.form`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  height:35em;
  align-items; center;
  justify-content:center;

   
`;

export const Title = styled.h1`
  font-size: 6em;
  color: #f5f5f5;
  cursor: default;
  font-family: "Open Sans";
  font-weight: bold;
  ${props =>
    props.primary &&
    css`
    font-size:3em;
    color:black;
    padding-bottom:.5em;
    `}
`





/** from button with blue
 * background: transparent;
border-radius: 0.2em;
border: 2px solid #00AAE7;
color:#00AAE7;
padding: 1.2em;
cursor: pointer;
font-weight:400;
line-height:1.4rem;
font-size:1em;
width:100%;
text-transform: uppercase;
letter-spacing: 0.03em; **/
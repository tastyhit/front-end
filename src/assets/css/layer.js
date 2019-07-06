import styled, { css } from 'styled-components';

//Button

export const Button = styled.button`
    background: transparent;
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
  background: none;
  border: none;
  padding: 5px 0 8px 15px;
  font-size: 1.5em;
  color: white;
  transition: .8s cubic-bezier(.2,.8,.2,1);
  ::placeholder {
    color: grey;
    padding-left: 5px;
  }
  :focus {
    color:white;
    outline:none;
  }
  ${props =>
    props.primary &&
    css`
    width: 80%;
    font-size: 1.2em;
    margin: 5px auto;
    `}
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid rgba(0,187,255,0.6);
  border-radius: .4rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto 1.3em auto;
  color:#FFFFFF;
  font-size:1.5em;
  line-height: 1.7em;
  padding-top:1em;

  ${props =>
    props.primary &&
    css`
    justify-content:baseline;
    
    `}
  ${props =>
    props.secondary &&
    css`
    padding:1em;
    width:100%;
    height:auto;
    justify-content:center;
    j
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

// @media (max-width:450px){
//    width:80%;
//}

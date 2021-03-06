import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { Button, Input } from '../../assets/css/layer'
import styled from 'styled-components';
import '../../assets/css/landing.css'
import addy from '../../assets/images/addyicon.png'

const ZipButton = styled(Button)`
  background-color: rgb(255, 195, 0);
  border:none;
  
  font-size:1.5em;
  font-weight:bold;
  padding:.8em;
  width:40%;
  color:black;
  @media(max-width: 800px){
      margin-top:1em;
      width:100%;
      
  }
`;


const zipcodes = ['90280', '90201',
    '90255', '90001',
    '90002', '90059',
    '90262', '90242',
    '90241', '90240',
    '90270', '90058',
    '90404', '90402',
    '90025', '90301',
    '90405', '90403',
    '90401', '90404',
    '90025', '90405'];

class ZipCode extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            zipcode: '',
            zipcodeList: zipcodes,
            error: '',
            nextpage: false,
            rings: false,
        }
    }



    inputHandler = (e) => {
        e.preventDefault();
        this.setState({ zipcode: e.target.value })
        if (e.target.value.length === 5) {   //US zipcodes
            axios.get(`https://ziptasticAPI.com/${e.target.value}`)
                .then(response => {
                    this.setState({ city: response.data.city })
                })
        }

    }


    checkZipCode = (e) => {
        this.setState({ rings: true })
        e.preventDefault();

        if (this.state.zipcodeList.includes(this.state.zipcode)) {
            this.setState({ nextpage: true })

        } else {
            alert('Sorry not in the zone')
        }
    }


    render() {
        if(this.state.nextpage){
            return <Redirect push to='welcome' />
        }
        
        return (
            <div className='zipCode'>
                <div className='headsub-wrapper'>
                    <h2>Discover the </h2>
                    <h2>taste of your herb</h2>
                </div>
                <h2>Find the nearest facility that can clean your piece</h2>
                <form onSubmit={this.checkZipCode} className='inputContainer'>
                    <div className='zipcode-wrapper'>
                        <div className='zipinput-wrapper'>
                            <img src={addy} alt='address' className='address-icon' />
                            <Input primary label='Enter zipCode' type='text' name='zipcode'
                                value={this.state.zipcode} onChange={this.inputHandler} maxLength='5' placeholder='Enter your Zipcode...' />
                        </div>

                        <ZipButton type='submit' >Locate</ZipButton>


                    </div>
                </form>
                <h2>{this.state.city}</h2>
                
            </div>
        )
    }

}

export default ZipCode;
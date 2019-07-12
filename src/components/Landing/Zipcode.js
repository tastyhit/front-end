import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { Button, Input } from '../../assets/css/layer'
import styled from 'styled-components';
import '../../assets/css/landing.css'


const ZipButton = styled(Button)`
  background-color: rgb(250, 202, 24);
  border:none;
  border-radius: 0 3em 3em 0;
  font-size:1.5em;
  font-weight:bold;
  padding:.8em;
  width:30%;
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

    //Checking if its qualify  and showing zipcode to user

    checkAge = (e) => {

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
        return (
            <div className='zipCode'>
                <div className='headsub-wrapper'>
                    <h2>Yuck, dirty ass bong hits.</h2>
                    <h2>Are you smoking tasteless weed thanks to a dirty pieces?</h2>
                </div>
                <h2>Let's get started</h2>
                <form onSubmit={this.checkZipCode} className='inputContainer'>
                    <div class='zipcode-wrapper'>
                        <div class='zipinput-wrapper'>
                            <Input label='Enter zipCode' type='text' name='zipcode'
                                value={this.state.zipcode} onChange={this.inputHandler} maxLength='5' placeholder='Enter your Zipcode...' />
                        </div>
                        {this.state.rings ? (

                            <div className='lds-ring'> <div /></div>


                        ) : (
                                <ZipButton type='submit' primary >Search</ZipButton>
                            )}

                    </div>
                </form>
                <h2>{this.state.city}</h2>
                {this.state.nextpage ? (
                    <Redirect to='/welcome' />
                ) : null}
            </div>
        )
    }

}

export default ZipCode;
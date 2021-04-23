import React, { Component } from 'react';



class SignUp extends Component  {
    constructor(){
        super();
        this.state ={
            name: '',
            phone: 0,
            email: '',
            zipcode: 0,

        }
       
    }


    render(){
        return (
            <div className='sign-up'>    
                <div className='form'>
                    <h1> Tasty Hits</h1>
                </div>
            </div>
        )
    }
    
}

export default SignUp;
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import LandingPage from './components/Landing/LandingPage.js'
import SignUp from './components/Landing/SignUp.js'
import Sales from './components/Sales/SalesPage'
import Category from './components/Category'
import LoginIn from './components/Auth/Login'
import ProductList from './components/DashBoard/ProductList';
import ViewItem from './components/DashBoard/ViewItem'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/welcome' component={Sales} />
        <Route path='/options' component={Category} />
        <Route path='/dashboard' component={ProductList} />
        <Route exact path='/login' component={LoginIn} />
        <Route path='/view' component={ViewItem} />
      </div>
    );
  }
}

export default App;

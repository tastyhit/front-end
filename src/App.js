import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Landing from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Landing} />
      </div>
    );
  }
}

export default App;

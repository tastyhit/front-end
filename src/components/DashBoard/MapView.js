import { Map, GoogleApiWrapper, Circle } from 'google-maps-react'
import React, { Component } from 'react';

import '../../assets/css/product.css';

const apimap = process.env.REACT_APP_GOOGLEAPI

const mapStyles = {
  width: '100%',
  height: '250px',
  position: 'relative',

};

class MapView extends Component {
  render() {
    return (

      <Map
        google={this.props.google}
        zoom={12.5}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        containerStyle={mapStyles}

      >
        <Circle radius={1200} center={{ lat: 47.444, lng: -122.176 }}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#00AAE7'
          fillOpacity={0.2} />

      </ Map >



    );
  }

}

export default GoogleApiWrapper({
  apiKey: apimap
})(MapView);
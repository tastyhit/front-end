import { Map, GoogleApiWrapper, Circle } from 'google-maps-react'
import React, { Component } from 'react';

import '../../assets/css/product.css';

const mapStyles = {
  width: '70%',
  height: '250px',
  position: 'relative',

};

class MapView extends Component {
  render() {
    return (

      <Map
        google={this.props.google}
        zoom={18}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        style={mapStyles}

      >
        <Circle radius={1200} center={{ lat: 47.444, lng: -122.176 }}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2} />

      </ Map >



    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSVbCNt5NEO1h1jJk6RWKmasFOkesXD7U'
})(MapView);
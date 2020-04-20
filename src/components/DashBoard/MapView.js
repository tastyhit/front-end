import { GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

const MapView = () => {
  return (
    <div className='navbar-wrapper'>
      <GoogleMap

        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSVbCNt5NEO1h1jJk6RWKmasFOkesXD7U'
})(MapView);
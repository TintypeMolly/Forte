import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

class Index extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100%', width:'100%'}}>
        <div style={{width: '100%', flex: 0}}>This is index page</div>
        <div style={{width: '100%', flex: 1}}>
          <GoogleMap
            bootstrapURLKeys={{
              key: "AIzaSyBUBNOFCXmHCkj2LcmI2f8tmYRN9-QPAqA",
              language: "ko",
            }}
            center={{lat:37.5658, lng:126.9386}}
            zoom={13}
          >
          </GoogleMap>
        </div>
        <div style={{width: '100%', flex: 1}}>
          Do you see the map
        </div>
      </div>
    );
  }
}

export default Index;

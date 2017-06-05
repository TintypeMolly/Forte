import React, { Component } from 'react';

class CurrentLocationMarker extends Component {
  render() {
    const style = {
      height: 15,
      width: 15,
      borderRadius: '50%',
      background: 'radial-gradient(ellipse at center, #a90329 0%,#8f0222 70%,#540012 100%)',
      textAlign: 'center',
      border: `black solid 2px`,
      zIndex: 9999,
    };
    return <div style={style}/>
  }
}

export default CurrentLocationMarker;

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Marker extends Component {
  render() {
    const pm25 = this.props.station.observation.pm25;
    const color = pm25 ? (pm25 <= 15 ? 'blue' : (pm25 <= 50 ? 'green' : (pm25 <= 100 ? 'yellow' : 'red'))) : 'gray';
    const style = {
      fontSize: 15,
      height: 30,
      width: 40,
      borderRadius: '50%',
      background: 'white',
      paddingTop: 10,
      textAlign: 'center',
      border: `${color} solid 3px`,
    };
    return (
      <div style={style} circle={true}>
        {pm25 ? pm25 : 'X'}
      </div>
    );
  }
}

export default Marker;

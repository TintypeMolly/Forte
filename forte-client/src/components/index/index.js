import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'

import store from '../../store';
import { getStationData } from '../../actions';

class Index extends Component {
  componentDidMount() {
    getStationData().then(action => {
      store.dispatch(action);
    });
  }
  render() {
    console.log('hey');
    console.log(this.props);
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
            {
              this.props.stations.map(station => (
                <div key={station.uuid} center={{lat: station.dmX, lng: station.dmY}}>
                  {station.observation.pm25}
                </div>
              ))
            }
          </GoogleMap>
        </div>
        <div style={{width: '100%', flex: 1}}>
          Do you see the map
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    stations: state.stations.data,
  };
};

export default connect(mapStateToProps)(Index);

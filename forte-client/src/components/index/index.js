import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'

import store from '../../store';
import { getStationData } from '../../actions';
import Marker from './marker';

class Index extends Component {
  componentDidMount() {
    getStationData().then(action => {
      store.dispatch(action);
    }).catch(() => {
      console.error('fail to fetch');
    });
  }
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
            {
              this.props.stations.map(station => (
                <Marker key={station.uuid} lat={station.dmX} lng={station.dmY} station={station}/>
              ))
            }
          </GoogleMap>
        </div>
        <div style={{width: '100%', flex: 1}}>
          {this.props.currentStation ? JSON.stringify(this.props.currentStation) : '관측소를 선택하세요'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stations: state.stations.data,
    currentStation: state.stations.currentStation,
  };
};

export default connect(mapStateToProps)(Index);

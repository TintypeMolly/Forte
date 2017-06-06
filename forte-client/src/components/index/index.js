import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'

import store from '../../store';
import { getStationData, setCurrentStation, setMapCenter } from '../../actions';
import Marker from './marker';
import {findNearestActiveStation} from './util'
import CurrentStation from './current_station'
import SearchBar from "./search_bar";
import CurrentLocationMarker from './current_location_marker';

class Index extends Component {
  componentDidMount() {
    if (this.props.stations.length === 0) {
      getStationData().then(action => {
        store.dispatch(action);
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(position => {
            const nearestStation = findNearestActiveStation(this.props.stations, position.coords.latitude, position.coords.longitude);
            store.dispatch(setCurrentStation(nearestStation));
            store.dispatch(setMapCenter(position.coords.latitude, position.coords.longitude));
          }, err => {
            console.error(err);
          });
        } else {
          alert("Geolocation을 사용할 수 없는 브라우저입니다.");
        }
      }).catch(() => {
        console.error('failed to fetch');
      });
    }
  }
  render() {
    const onMapClick = ({x, y, lat, lng, event}) => {
      const nearestStation = findNearestActiveStation(this.props.stations, lat, lng);
      store.dispatch(setCurrentStation(nearestStation));
      store.dispatch(setMapCenter(lat, lng));
    };
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%', width:'100%'}}>
        <div style={{width: '100%', flex: 0}}>
          <SearchBar stations={this.props.stations}/>
        </div>
        <div style={{width: '100%', flex: 1, position: 'relative'}}>
          <GoogleMap
            bootstrapURLKeys={{
              key: "AIzaSyBUBNOFCXmHCkj2LcmI2f8tmYRN9-QPAqA",
              language: "ko",
            }}
            style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
            center={this.props.center}
            zoom={13}
            onClick={onMapClick}
          >
            <CurrentLocationMarker lat={this.props.center.lat} lng={this.props.center.lng}/>
            {
              this.props.stations.map(station => (
                <Marker
                  key={station.uuid}
                  lat={station.dmX}
                  lng={station.dmY}
                  station={station}
                  current={this.props.currentStation && station.uuid === this.props.currentStation.uuid}
                />
              ))
            }
          </GoogleMap>
        </div>
        <div style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column'}}>
          <CurrentStation station={this.props.currentStation}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stations: state.stations.data,
    currentStation: state.stations.currentStation,
    center: state.map.center,
  };
};

export default connect(mapStateToProps)(Index);

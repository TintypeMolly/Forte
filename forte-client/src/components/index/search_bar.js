import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MyLocationIcon from 'material-ui/svg-icons/maps/my-location';
import geocoder from 'geocoder';

import store from '../../store';
import {setMapCenter, setCurrentStation} from '../../actions';
import {findNearestActiveStation} from './util'

const searchAddress = (stations, addr) => {
  if (addr) {
    const option = {key: 'AIzaSyBUBNOFCXmHCkj2LcmI2f8tmYRN9-QPAqA', language: 'ko'};
    geocoder.geocode(addr, (err, data) => {
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        const nearestStation = findNearestActiveStation(stations, location.lat, location.lng);
        store.dispatch(setCurrentStation(nearestStation));
        store.dispatch(setMapCenter(location.lat, location.lng));
      } else {
        alert('주소 검색에 실패했습니다.');
      }
    }, option);
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.textFieldValue = '';
  }
  render() {
    const onMyLocationTap = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const nearestStation = findNearestActiveStation(this.props.stations, position.coords.latitude, position.coords.longitude);
          store.dispatch(setCurrentStation(nearestStation));
          store.dispatch(setMapCenter(position.coords.latitude, position.coords.longitude));
        });
      } else {
        alert("Geolocation을 사용할 수 없는 브라우저입니다.");
      }
    };
    const onKeyDown = e => {
      if (e.keyCode === 13) {
        searchAddress(this.props.stations, this.textFieldValue);
      }
    };
    const onSearchTap = () => {
      searchAddress(this.props.stations, this.textFieldValue);
    };
    const onTextChange = (e, newValue) => {
      this.textFieldValue = newValue;
    };
    const textFieldStyle = {
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
    };
    const iconButtonStyle = {
      flex: 0,
      display: 'inline-block',
      width: 48,
      height: 48,
    };
    return (
      <div style={{flex: 0, width: '100%'}}>
        <div style={{display: 'flex', height: 48}}>
          <TextField
            style={textFieldStyle}
            hintText="주소를 입력하세요"
            onKeyDown={onKeyDown}
            onChange={onTextChange}
          />
          <IconButton
            tooltip="검색 버튼"
            style={iconButtonStyle}
            onTouchTap={onSearchTap}
            tooltipPosition="bottom-left"
          >
            <SearchIcon/>
          </IconButton>
          <IconButton
            tooltip="GPS 위치로"
            style={iconButtonStyle}
            onTouchTap={onMyLocationTap}
            tooltipPosition="bottom-left"
          >
            <MyLocationIcon/>
          </IconButton>
        </div>
      </div>
    )
  }
}

export default SearchBar;

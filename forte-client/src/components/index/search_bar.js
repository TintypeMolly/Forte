import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MyLocationIcon from 'material-ui/svg-icons/maps/my-location';

import store from '../../store';
import {setMapCenter, setCurrentStation} from '../../actions';
import {findNearestActiveStation} from './util'

class SearchBar extends Component {
  render() {
    const textFieldStyle = {
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
    };
    const iconButtonStyle = {
      display: 'inline-block',
      width: 48,
      height: 48,
    };
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
    return (
      <div style={{display: 'flex'}}>
        <TextField style={textFieldStyle} hintText="주소를 입력하세요"/>
        <IconButton style={iconButtonStyle}>
          <SearchIcon/>
        </IconButton>
        <IconButton style={iconButtonStyle} onTouchTap={onMyLocationTap}>
          <MyLocationIcon/>
        </IconButton>
      </div>
    )
  }
}

export default SearchBar;

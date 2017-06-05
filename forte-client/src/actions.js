import request from 'request-promise';

const getStationData = async () => {
  const response = await request({method: 'GET', uri: 'http://tintypemolly.xyz/api', json: true});
  return {
    type: 'GET_STATIONS',
    data: response,
  }
};

const setCurrentStation = (station) => {
  return {
    type: 'SET_CURRENT_STATION',
    data: station,
  }
};

const setMapCenter = (lat, lng) => {
  return {
    type: 'SET_MAP_CENTER',
    location: {lat, lng},
  };
};

export {
  getStationData,
  setCurrentStation,
  setMapCenter,
}

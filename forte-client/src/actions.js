import request from 'request-promise';

const getStationData = async () => {
  const response = await request({method: 'GET', uri: 'http://tintypemolly.xyz/api', json: true});
  return {
    type: 'GET_STATIONS',
    data: response,
  }
};

export {
  getStationData,
}

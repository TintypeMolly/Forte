const stationInitialState = {
  data: [],
  currentStation: null,
};

const stationReducer = (state = stationInitialState, action) => {
  switch (action.type) {
    case 'GET_STATIONS':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_CURRENT_STATION':
      return {
        ...state,
        currentStation: action.data,
      };
    default:
      return state;
  }
};

const mapInitialState = {
  center: {lat:37.5658, lng:126.9386},
};

const mapReducer = (state = mapInitialState, action) => {
  switch (action.type) {
    case 'SET_MAP_CENTER':
      return {
        ...state,
        center: action.location,
      };
    default:
      return state;
  }
};

export default {
  stations: stationReducer,
  map: mapReducer,
};

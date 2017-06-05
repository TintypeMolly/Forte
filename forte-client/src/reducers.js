const initialState = {
  data: [],
};

const stationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STATIONS':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default {
  stations: stationReducer,
};

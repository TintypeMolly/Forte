import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import { responsiveDrawer } from 'material-ui-responsive-drawer';

import reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
    browser: responsiveStateReducer,
    responsiveDrawer,
  }),
  responsiveStoreEnhancer
);

export default store;

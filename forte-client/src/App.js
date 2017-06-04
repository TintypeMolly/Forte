import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import history from './history';
import About from './components/about';
import Credit from './components/credit';
import Index from './components/index';
import Base from './components/base';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history}>
            <Route path="/" component={Base}>
              <IndexRoute component={Index}/>
              <Route path="about" component={About}/>
              <Route path="credit" component={Credit}/>
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  ResponsiveDrawer,
  BodyContainer,
  ResponsiveAppBar,
  setDrawerOpen
} from 'material-ui-responsive-drawer'
import MenuItem from 'material-ui/MenuItem';

import history from '../../history';
import store from '../../store';

class Base extends Component {
  render() {
    const moveTo = url => () => {
      history.push(url);
      store.dispatch(setDrawerOpen(false));
    };
    return (
      <div>
        <ResponsiveDrawer>
          <div>
            <MenuItem primaryText="홈" onTouchTap={moveTo('/')}/>
            <MenuItem primaryText="안내" onTouchTap={moveTo('about')}/>
            <MenuItem primaryText="크레딧" onTouchTap={moveTo('/credit')}/>
          </div>
        </ResponsiveDrawer>
        <BodyContainer>
          <ResponsiveAppBar
            title="Forte"
          />
          <div style={{paddingTop: 64, minHeight: '100%', display: 'flex'}}>
            {this.props.children}
          </div>
        </BodyContainer>
      </div>
    );
  }
}

export default Base;

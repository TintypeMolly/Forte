import React, { Component } from 'react';
import {
  ResponsiveDrawer,
  BodyContainer,
  ResponsiveAppBar,
  setDrawerOpen
} from 'material-ui-responsive-drawer'
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import InfoIcon from 'material-ui/svg-icons/action/info';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

import history from '../../history';
import store from '../../store';
import forteImage from './forte.png';

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
            <div style={{width: '100%'}}>
              <img style={{width: '100%'}} src={forteImage} alt="포르테 사진"/>
            </div>
            <MenuItem primaryText="홈" onTouchTap={moveTo('/')} leftIcon={<HomeIcon/>}/>
            <MenuItem primaryText="소개" onTouchTap={moveTo('about')} leftIcon={<InfoIcon/>}/>
            <MenuItem primaryText="크레딧" onTouchTap={moveTo('/credit')} leftIcon={<FavoriteIcon/>}/>
          </div>
        </ResponsiveDrawer>
        <BodyContainer>
          <ResponsiveAppBar
            title="Forte"
          />
          <div style={{marginTop: 64, height: 'calc(100% - 74px)', display: 'flex'}}>
            {this.props.children}
          </div>
        </BodyContainer>
      </div>
    );
  }
}

export default Base;

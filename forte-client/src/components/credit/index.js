import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DescriptionIcon from 'material-ui/svg-icons/action/description';

import forteImage from './forte_avatar.png';
import hgyAvatar from './hwang_gyeongyun.jpeg';
import yhjAvatar from './yun_heejun.jpg';
import pyjAvatar from './park_yijae.jpeg';

const Credit = () => {
  const cardStyle = {marginBottom: 10, marginRight: 10, display: 'inline-block'};
  const thridParties = [
    {
      name: 'babel',
      homepage: 'https://babeljs.io/',
      license: 'https://github.com/babel/babel/blob/master/LICENSE',
    }, {
      name: 'express',
      homepage: 'https://expressjs.com/',
      license: 'https://github.com/expressjs/express/blob/master/LICENSE',
    }, {
      name: 'mysql',
      homepage: 'https://github.com/mysqljs/mysql',
      license: 'https://github.com/mysqljs/mysql/blob/master/License',
    }, {
      name: 'sequelize',
      homepage: 'http://docs.sequelizejs.com/',
      license: 'https://github.com/sequelize/sequelize/blob/master/LICENSE',
    }, {
      name: 'cheerio',
      homepage: 'https://cheerio.js.org/',
      license: 'https://github.com/cheeriojs/cheerio/blob/master/LICENSE',
    }, {
      name: 'esprima',
      homepage: 'http://esprima.org/',
      license: 'https://github.com/jquery/esprima/blob/master/LICENSE.BSD',
    }, {
      name: 'esprima-to-value',
      homepage: 'https://github.com/yorkie/esprima-to-value',
      license: 'https://github.com/yorkie/esprima-to-value/blob/master/LICENSE',
    }, {
      name: 'request',
      homepage: 'https://github.com/request/request',
      license: 'https://github.com/request/request/blob/master/LICENSE',
    }, {
      name: 'request-promise',
      homepage: 'https://github.com/request/request-promise',
      license: 'https://github.com/request/request-promise/blob/master/LICENSE',
    }, {
      name: 'geocoder',
      homepage: 'https://github.com/wyattdanger/geocoder',
      license: 'https://github.com/wyattdanger/geocoder/blob/master/LICENSE',
    }, {
      name: 'geodist',
      homepage: 'https://github.com/cmoncrief/geodist',
      license: 'https://github.com/cmoncrief/geodist/blob/master/LICENSE',
    }, {
      name: 'google-map-react',
      homepage: 'https://github.com/istarkov/google-map-react',
      license: null,
      licenseRepr: 'MIT',
    }, {
      name: 'material-ui',
      homepage: 'http://www.material-ui.com/',
      license: 'https://github.com/callemall/material-ui/blob/master/LICENSE',
    }, {
      name: 'material-ui-responsive-drawer',
      homepage: 'https://github.com/TarikHuber/material-ui-responsive-drawer',
      license: null,
      licenseRepr: 'MIT',
    }, {
      name: 'react',
      homepage: 'https://facebook.github.io/react/',
      license: 'https://github.com/facebook/react/blob/master/LICENSE',
    }, {
      name: 'react-router',
      homepage: 'https://reacttraining.com/react-router/',
      license: 'https://github.com/ReactTraining/react-router/blob/master/LICENSE.md',
    }, {
      name: 'react-router-redux',
      homepage: 'https://github.com/reactjs/react-router-redux',
      license: 'https://github.com/reactjs/react-router-redux/blob/master/LICENSE',
    }, {
      name: 'react-tap-event-plugin',
      homepage: 'https://github.com/zilverline/react-tap-event-plugin',
      license: 'https://github.com/zilverline/react-tap-event-plugin/blob/master/LICENSE',
    }, {
      name: 'redux',
      homepage: 'http://redux.js.org/',
      license: 'https://github.com/reactjs/redux/blob/master/LICENSE.md',
    }, {
      name: 'redux-responsive',
      homepage: 'https://github.com/AlecAivazis/redux-responsive',
      license: 'https://github.com/AlecAivazis/redux-responsive/blob/master/LICENSE.md',
    },
  ];
  return (
    <div style={{padding: 10}}>
      <h2>Members</h2>
      <Card style={cardStyle}>
        <CardHeader title="오진균" subtitle="2010147101" avatar={forteImage}/>
        <CardText>시스템 엔지니어링, 프로그래밍 담당</CardText>
      </Card>
      <Card style={cardStyle}>
        <CardHeader title="박이재" subtitle="2016147546" avatar={pyjAvatar}/>
        <CardText>프로젝트 관리 담당</CardText>
      </Card>
      <Card style={cardStyle}>
        <CardHeader title="윤희준" subtitle="2016147525" avatar={yhjAvatar}/>
        <CardText>문서 및 PPT 작성 담당</CardText>
      </Card>
      <Card style={cardStyle}>
        <CardHeader title="황경윤" subtitle="2016147503" avatar={hgyAvatar}/>
        <CardText>프로그래밍, 리소스 관리 담당</CardText>
      </Card>
      <h2>Open Source Usage Acknowledge</h2>
      {
        thridParties.map(pack => (
          <div key={pack.name}>
            <h3>{pack.name}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li><HomeIcon/><a href={pack.homepage} target="_blank" rel="noopener noreferrer">Homepage</a></li>
              <li><DescriptionIcon/>
                {pack.license ?
                  <a href={pack.license} target="_blank" rel="noopener noreferrer">License</a>
                  :
                  <span>{pack.licenseRepr} (라이센스 문서 없음)</span>
                }
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Credit;
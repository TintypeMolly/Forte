import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import forteImage from './forte_avatar.png';
import hgyAvatar from './hwang_gyeongyun.jpeg';
import yhjAvatar from './yun_heejun.jpg';
import pyjAvatar from './park_yijae.jpeg';

const Credit = () => {
  const cardStyle = {marginBottom: 10, marginRight: 10, display: 'inline-block'};
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
      <p>TODO</p>
    </div>
  );
};

export default Credit;
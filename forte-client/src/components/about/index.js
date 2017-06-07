import React from 'react';
import Paper from 'material-ui/Paper';

import mobileScreenshot from './mobile.png';
import mediumScreenshot from './medium.png';
import bigScreenshot from './big.png';
import './about.css';

const About = () => {
  return (
    <div className="about" style={{padding: 10, width: '100%'}}>
      <Paper style={{padding: 10, width: '100%', marginBottom: 10}}>
        <h2>이 웹사이트에 대하여</h2>
        <h3>개요</h3>
        <p>
          Forte는 버튼 클릭 한 번으로 GPS를 사용하여 사용자의 현재 위치에서 가장 가까운 관측소로부터 대기오염정보를 알려주는 웹사이트입니다.
          GPS 기능이 없는 기기라도 자신의 현재 위치를 검색창에 입력하거나 지도상 위치를 클릭하면 그곳으로부터 가장 가까운 관측소를 찾습니다.
        </p>
        <h3>기존 사이트</h3>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80">네이버</a>, 에어코리아 정보 기반 운영</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.airkorea.or.kr/index">에어코리아</a>, 한국환경공단 운영</li>
          <li><a target="_blank" rel="noopener noreferrer" href="http://cleanair.seoul.go.kr">서울특별시 대기환경정보</a>, 서울특별시 기후환경본부 운영</li>
          <li><a target="_blank" rel="noopener noreferrer" href="http://www.aqicn.org">AQICN</a>, World Air Quality Project 운영</li>
        </ul>
        <p>
          기존 사이트들은 도시에 대한 대략적인 정보만 제공하거나, 굉장히 작은 지도를 직접 클릭해 지역을 찾아야 해서 사용이 불편합니다.
          또한 GPS를 통해서 현재 위치를 자동으로 판별하는 기능을 제공하는 곳은 찾기 어렵습니다.
        </p>
        <h3>기능 설명</h3>
        <h4>기본구조</h4>
        <p></p>
        <h4>Geolocation API 사용</h4>
        <p>
          빽뺵한 지도를 힘들게 클릭하거나 도시 단위의 대략적인 정보를 볼 필요가 없습니다.
          Geolocation API를 통해 GPS정보를 받아서 자동으로 현재 위치로부터 가장 가까운 관측소를 찾습니다.
        </p>
        <h4>Responsive Design</h4>
        <figure>
          <img src={mobileScreenshot} alt="모바일 화면에서의 홈페이지 레이아웃을 보여주는 스크린샷"/>
          <figcaption>모바일 화면 레이아웃</figcaption>
        </figure>
        <figure>
          <img src={mediumScreenshot} alt="중간 크기 화면에서의 홈페이지 레이아웃을 보여주는 스크린샷"/>
          <figcaption>중간 크기 화면 레이아웃</figcaption>
        </figure>
        <figure>
          <img src={bigScreenshot} alt="큰 화면에서의 홈페이지 레이아웃을 보여주는 스크린샷"/>
          <figcaption>큰 화면 레이아웃</figcaption>
        </figure>
        <p>
          별도의 모바일 페이지를 만들지 않고, 한 페이지 내에서 스크린 크기에 따라 반응하여 레이아웃을 적절하게 실시간으로 변경합니다.
        </p>
        <h4>Single Page App</h4>
        <p>TODO</p>
      </Paper>
    </div>
  );
};

export default About;

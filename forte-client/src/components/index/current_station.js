import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const getUnit = (type) => {
  switch (type) {
    case 'pm25':
    case 'pm10':
      return '㎍/㎥';
    case 'o3':
    case 'no2':
    case 'co':
    case 'so2':
      return 'ppm';
    default:
      return undefined;
  }
};

const getAlertLevel = (type, station) => {
  const good = 'good';
  const normal = 'normal';
  const bad = 'bad';
  const worst = 'worst';
  const levels = {
    good: {text: '좋음', color: 'blue'},
    normal: {text: '보통', color: 'green'},
    bad: {text: '나쁨', color: 'yellow'},
    worst: {text: '매우나쁨', color: 'red'},
    null: {text: '', color: 'gray'},
  };
  if (!station || !station.observation[type]) {
    return levels['null'];
  }
  let level;
  const value = station.observation[type];
  switch (type) {
    case 'pm25':
      level = value <= 15 ? good : (value <= 50 ? normal : (value <= 100 ? bad : worst));
      break;
    case 'pm10':
      level = value <= 30 ? good : (value <= 80 ? normal : (value <= 150 ? bad : worst));
      break;
    case 'o3':
      level = value <= 0.03 ? good : (value <= 0.09 ? normal : (value <= 0.15 ? bad : worst));
      break;
    case 'no2':
      level = value <= 0.03 ? good : (value <= 0.06 ? normal : (value <= 0.2 ? bad : worst));
      break;
    case 'co':
      level = value <= 2 ? good : (value <= 9 ? normal : (value <= 15 ? bad : worst));
      break;
    case 'so2':
      level = value <= 0.02 ? good : (value <= 0.05 ? normal : (value <= 0.15 ? bad : worst));
      break;
    default:
      level = 'null';
      break;
  }
  return levels[level];
};

const Circle = ({color, style}) => {
  const size = 40;
  return (
    <div style={{
      background: color,
      width: size,
      height: size,
      borderRadius: '50%',
      margin: '0 auto',
      ...style,
    }}/>
  )
};

const AirQualityPaper = ({type, station, browser}) => {
  const alertLevel = getAlertLevel(type, station);
  const paperStyle = {
    flex: 1,
    textAlign: 'center',
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
  };
  return (
    <Paper style={paperStyle}>
      <h2 style={{margin: 0, flex: 0}}>{type === 'pm25' ? 'PM2.5' : type.toUpperCase()}</h2>
      <div style={{textAlign: 'center'}}>
        <Circle color={alertLevel.color}/>
      </div>
      <div>
        {station && station.observation[type] ? `${station.observation[type]} ${getUnit(type)}` : '측정값 없음'}
      </div>
      <div>
        {alertLevel.text}
      </div>
    </Paper>
  );
};


class CurrentStation extends Component {
  render() {
    const station = this.props.station;
    const headerStyle = {
      flex: 0,
      marginTop: 5,
      marginBottom: 5,
    };
    const subheaderStyle = {
      flex: 0,
      color: 'gray',
      fontSize: '75%',
    };
    return (
      <div style={{flex: 1, margin: 5, display: 'flex', flexDirection: 'column'}}>
        <h2 style={headerStyle}>{station ? `${station.stationName} 측정소` : '측정소 선택되지 않음'}</h2>
        <div style={subheaderStyle}>{station ? station.addr : '현재 위치를 지정해주세요.'}</div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <div style={{flex: 1, display: 'flex'}}>
            <AirQualityPaper type="pm25" station={station}/>
            <AirQualityPaper type="pm10" station={station}/>
            <AirQualityPaper type="o3" station={station}/>
          </div>
          <div style={{flex: 1, display: 'flex'}}>
            <AirQualityPaper type="no2" station={station}/>
            <AirQualityPaper type="co" station={station}/>
            <AirQualityPaper type="so2" station={station}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentStation;

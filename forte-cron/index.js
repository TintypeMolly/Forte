import { SERVICE_KEY } from './config';
import request from 'request-promise';

const getObservatoryList = async () => {
  const options = {
    uri: 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList',
    qs: {
      pageNo: '1',
      numOfRows: '999999',
      ServiceKey: SERVICE_KEY,
    },
    _returnType: 'json',
  }
  const result = await request.get(options);
  console.log(result);
};
getObservatoryList();

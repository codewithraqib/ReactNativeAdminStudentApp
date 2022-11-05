import {set, isEmpty} from 'lodash';
import appData from '../../appData';

const apiCall = ({url, callback, method, params}) => {
  const headers = {};
  // set(headers, 'Accept', 'application/json, text/plain, */*');
  set(headers, 'app-id', appData.FAKE_API_ID);

  if (!isEmpty(params)) {
    reqBody.body = JSON.stringify(params);
  }
  const reqBody = {
    method,
    headers: new Headers(headers),
  };

  //   console.log('url to fetch-----', appData.BASE_URL + url);
  fetch(appData.BASE_URL + url, reqBody)
    .then(response => response.json())
    .then(responseJson => {
      if (callback) callback(responseJson);
    })
    .catch(error => {
      console.error(error);
    });
};

export default apiCall;

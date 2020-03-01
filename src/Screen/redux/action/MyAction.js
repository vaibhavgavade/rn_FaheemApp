import axios from 'axios';
import {API_FETCHING_SUCCESSFULL_FETCHING} from '../action/ActionData';
import {API_FETCHING_UNSUCCESSFULL} from '../action/ActionData';
import {API_FETCHING_STARTED} from '../action/ActionData';
import {API_SUCESSFULL_SECONDPAGE} from '../action/ActionData';
import {secondurl} from '../../../Screen/constant/constantData';
import {baseurl} from '../../constant/constantData';

export const searchApiLocation = () => dispatch => {
  dispatch({type: API_FETCHING_STARTED});
  axios
    .post(`${baseurl}/locations`, {
      api_key_val: '1',
    })
    .then(res => {
      dispatch({
        type: API_FETCHING_SUCCESSFULL_FETCHING,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({type: API_FETCHING_UNSUCCESSFULL, payload: err});
    });
};

export const baseUrlLocation = (text, myText) => dispatch => {
  dispatch({type: API_FETCHING_STARTED});
  const formData = new FormData();
  formData.append('api_key_val', 1);
  formData.append('student_id', 333);
  formData.append('lat', 26.236126);
  formData.append('long', 50.039303);
  formData.append('keyword', `${myText}`);
  formData.append('location_id', `${text}`);
  axios({
    url: secondurl,
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(res => {
      dispatch({
        type: API_SUCESSFULL_SECONDPAGE,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({type: API_FETCHING_UNSUCCESSFULL, payload: err});
    });
};

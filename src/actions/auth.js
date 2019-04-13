import axios from '../services/axios';
import { saveToken, getToken } from '../utilities/localStorage';

import actionType from './types';
import { startFetching, stopFetching } from './fetching';


export const signup = ({ name = '', isAdmin = false }) => (
  {
    type: actionType.SIGN_UP,
    payload: { name, isAdmin }
  }
);

export const signin = ({ name = '', isAdmin = false }) => ({
  type: actionType.LOG_IN,
  payload: { name, isAdmin }
});

export const signUpUser = userData => async (dispatch) => {
  const { log } = console;
  dispatch(startFetching());
  try {
    const { data } = await axios.post(
      '/auth/signup',
      userData
    );
    const { data: dataArr } = data;
    const { token, user: { firstname, isAdmin } } = dataArr[0];
    saveToken(token);
    log(getToken());
    dispatch(signup({ name: firstname, isAdmin }));
    dispatch(stopFetching());
  } catch (error) {
    // console.log(error);
    // console.log(error.response);
    log(error.message);
    if (error.response) {
      const { response: { data: { error: errMessage } } } = error;

      // eslint-disable-next-line max-len
      log(errMessage); // NOTICE, based on how the backend was implemented, errMessage can be a string or an object. So check, if it's a string then render. If it's an object, convert it to an array (Array.from(obj) .. or something) and render each element of the array
      dispatch(stopFetching(false, errMessage));
    } else {
      dispatch(stopFetching(false, 'Something went wrong. Please check your internet connection and try again'));
    }
  }
};

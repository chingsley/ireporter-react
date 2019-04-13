import { toast } from 'react-toastify';
import axios from '../services/axios';
import { saveToken } from '../utilities/localStorage';

import actionType from './types';
import { startFetching, stopFetching } from './fetching';

export const signup = (type, user) => ({ type, user });
export const signin = (type, user) => ({ type, user });
const handleError = error => (typeof error === 'string' ? error : Object.entries(error).join('\n'));

export const signUpUser = userData => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data } = await axios.post('/auth/signup', userData);
    const { token, user } = data.data[0];
    saveToken(token);
    dispatch(signup(actionType.SIGN_UP, user));
    dispatch(stopFetching());
    toast.success(`welcome ${user.firstname}`);
    return true;
  } catch (error) {
    if (error.response) {
      const { response: { data: { error: errResponse } } } = error;
      // eslint-disable-next-line max-len
      // NOTICE, based on how the backend was implemented, errResponse can be a string or an object. So check, if it's a string then render. If it's an object, convert it to an array (Array.from(obj) .. or something) and render each element of the array
      dispatch(stopFetching(false, handleError(errResponse)));
      toast.error(handleError(errResponse));
      return false;
    }
    if (error.message) {
      toast.error(error.message);
      dispatch(stopFetching(false, error.message));
      toast.error(error.message);
      return false;
    }
    const errorMessage = 'Something went wrong. Please check your internet connection and try agian';
    dispatch(stopFetching(false, errorMessage));
    toast.error(errorMessage);
    return false;
  }
};

export const loginUser = userData => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data } = await axios.post('/auth/login', userData);
    const { token, user } = data.data[0];
    saveToken(token);
    dispatch(signin(actionType.LOG_IN, user));
    dispatch(stopFetching());
    toast.success(`welcome ${user.firstname}`);
    return true;
  } catch (error) {
    if (error.response) {
      const { response: { data: { error: errorResponse } } } = error;
      toast.error(handleError(errorResponse));
      dispatch(stopFetching(false, handleError(errorResponse)));
      return false;
    }
    if (error.message) {
      toast.error(error.message);
      dispatch(stopFetching(false, error.message));
      return false;
    }
    const errorMessage = 'Something went wrong. Please check your internet connection and try agian';
    toast.error(errorMessage);
    dispatch(stopFetching(false, errorMessage));
    return false;
  }
};

export const authorise = (userData, loginOrSignup) => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data } = await axios.post(`/auth/${loginOrSignup}`, userData);
    const { token, user } = data.data[0];
    saveToken(token);
    const typeOfAction = loginOrSignup === 'login' ? actionType.LOG_IN : actionType.SIGN_UP;
    dispatch(signin(typeOfAction, user));
    dispatch(stopFetching());
    toast.success(`welcome ${user.firstname}`);
    return true;
  } catch (error) {
    if (error.response) {
      const { response: { data: { error: errorResponse } } } = error;
      toast.error(handleError(errorResponse));
      dispatch(stopFetching(false, handleError(errorResponse)));
      return false;
    }
    if (error.message) {
      toast.error(error.message);
      dispatch(stopFetching(false, error.message));
      return false;
    }
    const errorMessage = 'Something went wrong. Please check your internet connection and try agian';
    toast.error(errorMessage);
    dispatch(stopFetching(false, errorMessage));
    return false;
  }
};

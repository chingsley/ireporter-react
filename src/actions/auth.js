/* eslint-disable consistent-return */
import { toast } from 'react-toastify';

import axios from '../services/axios';
import actionType from './types';
import handleError from '../services/errorHandler';
import { saveToken } from '../utilities/localStorage';
import { startFetching, stopFetching } from './fetching';

export const signup = (type, user) => ({ type, user });
export const signin = (type, user) => ({ type, user });

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
    handleError(dispatch, error);
  }
};

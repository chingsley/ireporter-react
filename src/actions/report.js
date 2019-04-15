import { toast } from 'react-toastify';

import actionType from './types';
import axios from '../services/axios';
import handleError from '../services/errorHandler';
import { startFetching, stopFetching } from './fetching';

export const createReport = (type, report) => ({ type, report });
export const editReport = (type, report) => ({ type, report });

export const createNewReport = reportData => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data } = await axios.post(`/${reportData.type}`, reportData);
    const { message, record } = data.data[0];
    dispatch(createReport(actionType.MAKE_NEW_REPORT, record[0]));
    dispatch(stopFetching());
    toast.success(message);
  } catch (error) {
    handleError(dispatch, error);
  }
};

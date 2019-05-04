import { toast } from 'react-toastify';

import actionType from './types';
import axios from '../services/axios';
import handleError from '../services/errorHandler';
import { startDataFetching, stopDataFetching } from './fetching';
import { saveReports, getLocalReports } from '../utilities/localStorage';

export const createNewReport = reportData => async (dispatch) => {
  dispatch(startDataFetching());
  try {
    const { data } = await axios.post(`/${reportData.type}`, reportData);
    const { message, record } = data.data[0];
    saveReports([...getLocalReports(), record[0]]);
    dispatch({
      type: actionType.MAKE_NEW_REPORT,
      payload: record[0],
    });
    dispatch(stopDataFetching());
    toast.success(message);
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const getUserReports = () => async (dispatch) => {
  dispatch(startDataFetching());
  try {
    const { data: { data: userRedflags } } = await axios.get('/red-flags');
    const { data: { data: userInterventions } } = await axios.get('/interventions');
    const userReports = [...userRedflags, ...userInterventions];
    saveReports(userReports);
    dispatch({
      type: actionType.GET_USER_REPORTS,
      payload: userReports,
    });
    dispatch(stopDataFetching());
  } catch (error) {
    handleError(dispatch, error);
  }
};

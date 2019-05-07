/* eslint-disable no-underscore-dangle */
// import { toast } from 'react-toastify';

import actionType from './types';
import axios from '../services/axios';
import handleError from '../services/errorHandler';
import { startDataFetching, stopDataFetching } from './fetching';
import { saveReports, getLocalReports, getToken } from '../utilities/localStorage';
import { alertUser } from '../components/Alert';

export const createNewReport = reportData => async (dispatch) => {
  dispatch(startDataFetching());
  try {
    const form = new FormData();
    Object.keys(reportData).forEach(key => form.append(key, reportData[key]));
    const token = getToken();
    const { data } = await axios.post(
      `/${reportData.type}`,
      form,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
        },
      },
    );
    const { message, record } = data.data[0];
    saveReports([...getLocalReports(), record[0]]);
    dispatch({
      type: actionType.MAKE_NEW_REPORT,
      payload: record[0],
    });
    dispatch(stopDataFetching());
    await alertUser(message, 'success');
    setTimeout(() => {
      window.location.reload(true);
    }, 6000);
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

export const changeReportStatus = ({ id, status, type }) => async (dispatch) => {
  dispatch(startDataFetching());
  try {
    const { data: { data } } = await axios.patch(`/${type}s/${id}/status`, { status });
    const { record } = data[0];
    const updatedReport = record[0];
    const allReports = await getLocalReports().map((report) => {
      if (report.id === updatedReport.id) {
        return { ...report, ...updatedReport };
      }
      return report;
    });
    saveReports(allReports);
    dispatch({
      type: actionType.EDIT_REPORT,
      payload: updatedReport,
    });
    dispatch(stopDataFetching());
    await alertUser('successfully changed!', 'success');
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const editReport = ({
  id, comment, location, type,
}) => async (dispatch) => {
  try {
    dispatch(startDataFetching());
    await axios.patch(`/${type}s/${id}/comment`, { comment });
    const { data: { data } } = await axios.patch(`/${type}s/${id}/location`, { location });
    const { record } = data[0];
    const updatedReport = record[0];
    const allReports = await getLocalReports().map((report) => {
      if (report.id === updatedReport.id) {
        return { ...report, ...updatedReport };
      }
      return report;
    });
    saveReports(allReports);
    dispatch({
      type: actionType.EDIT_REPORT,
      payload: updatedReport,
    });
    dispatch(stopDataFetching());
    await alertUser('successfully saved!', 'success');
    setTimeout(() => {
      window.location.href = '/reports';
    }, 6000);
  } catch (error) {
    handleError(dispatch, error);
  }
};

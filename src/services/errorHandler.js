import { stopDataFetching } from '../actions/fetching';
import { alertUser } from '../components/Alert';

const formatError = error => (typeof error === 'string' ? error : Object.entries(error).join('\n'));

export default (dispatch, error) => {
  if (error.response) {
    const { response: { data: { error: errorResponse } } } = error;
    alertUser(formatError(errorResponse), 'error');
    dispatch(stopDataFetching(false, formatError(errorResponse)));
    return false;
  }
  if (error.message) {
    alertUser(error.message, 'error');
    dispatch(stopDataFetching(false, error.message));
    return false;
  }
  const errorMessage = 'Something went wrong. Please check your internet connection and try agian';
  alertUser(errorMessage, 'error');
  dispatch(stopDataFetching(false, errorMessage));
  return false;
};

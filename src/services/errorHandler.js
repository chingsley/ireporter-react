import { toast } from 'react-toastify';
import { stopDataFetching } from '../actions/fetching';

const formatError = error => (typeof error === 'string' ? error : Object.entries(error).join('\n'));

export default (dispatch, error) => {
  if (error.response) {
    const { response: { data: { error: errorResponse } } } = error;
    toast.error(formatError(errorResponse));
    dispatch(stopDataFetching(false, formatError(errorResponse)));
    return false;
  }
  if (error.message) {
    toast.error(error.message);
    dispatch(stopDataFetching(false, error.message));
    return false;
  }
  const errorMessage = 'Something went wrong. Please check your internet connection and try agian';
  toast.error(errorMessage);
  dispatch(stopDataFetching(false, errorMessage));
  return false;
};

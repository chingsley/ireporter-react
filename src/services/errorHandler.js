import { toast } from 'react-toastify';
import { stopFetching } from '../actions/fetching';

const formatError = error => (typeof error === 'string' ? error : Object.entries(error).join('\n'));

export default (dispatch, error) => {
  if (error.response) {
    const { response: { data: { error: errorResponse } } } = error;
    toast.error(formatError(errorResponse));
    dispatch(stopFetching(false, formatError(errorResponse)));
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
};

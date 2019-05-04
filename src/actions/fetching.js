import actionType from './types';

export const startDataFetching = () => ({
  type: actionType.START_FETCHING,
});

export const stopDataFetching = (fetched = true, message = '') => ({
  type: actionType.STOP_FETCHING,
  payload: {
    error: !fetched,
    message,
  },
});

import actionType from './types';

export const startFetching = () => ({
  type: actionType.START_FETCHING,
});

export const stopFetching = (fetched = true, message = '') => ({
  type: actionType.STOP_FETCHING,
  payload: {
    error: !fetched,
    message,
  },
});

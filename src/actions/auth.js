import actionType from './types';

export const signup = ({ name = '', isAdmin = false }) => (
  {
    type: actionType.SIGN_UP,
    payload: { name, isAdmin }
  }
);

export const signin = ({ name = '', isAdmin = false }) => ({
  type: actionType.LOG_IN,
  payload: { name, isAdmin }
});

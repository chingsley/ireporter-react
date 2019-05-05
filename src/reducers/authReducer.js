import actionType from '../actions/types';
import { getCurrentUser } from '../utilities/localStorage';

const initialState = {
  isLoggedIn: !!getCurrentUser(),
  user: getCurrentUser() || {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGN_UP:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case actionType.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

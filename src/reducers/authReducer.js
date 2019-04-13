import actionType from '../actions/types';

const initialState = {
  isLoggedIn: false,
  user: {},
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
    default:
      return state;
  }
};

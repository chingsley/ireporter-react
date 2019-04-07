import actionType from '../actions/types';

const initialState = {
  isLoggedIn: false,
  name: '',
  isAdmin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGN_UP:
      return {
        ...state
      };
    default:
      return state;
  }
};

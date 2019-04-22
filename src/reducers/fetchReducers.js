import actionType from '../actions/types';

const initialState = {
  fetching: false,
  errMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.START_FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case actionType.STOP_FETCHING:
      return {
        ...state,
        fetching: false,
        errMessage: action.payload.error ? action.payload.message : '',
      };
    default:
      return state;
  }
};

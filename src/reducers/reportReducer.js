import actionType from '../actions/types';

const { MAKE_NEW_REPORT } = actionType;

const initialState = {
  report: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAKE_NEW_REPORT:
      return {
        ...state,
        report: action.report,
      };
    default:
      return state;
  }
};

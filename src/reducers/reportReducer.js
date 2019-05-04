import actionType from '../actions/types';
import { getLocalReports } from '../utilities/localStorage';

const {
  MAKE_NEW_REPORT,
  GET_USER_REPORTS,
  LOGOUT,
} = actionType;

const initialState = {
  report: {},
  userReports: getLocalReports() || [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAKE_NEW_REPORT:
      return {
        ...state,
        report: action.payload,
        userReports: [...state.userReports, action.payload],
      };
    case GET_USER_REPORTS:
      return {
        ...state,
        userReports: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        report: {},
        userReports: [],
      };
    default:
      return state;
  }
};

/* eslint-disable no-case-declarations */
import actionType from '../actions/types';
import { getLocalReports } from '../utilities/localStorage';

const {
  MAKE_NEW_REPORT,
  GET_USER_REPORTS,
  LOGOUT,
  EDIT_REPORT,
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
    case EDIT_REPORT:
      const updatedReports = state.userReports.map((report) => {
        if (report.id === action.payload.id) {
          return {
            ...report,
            ...action.payload,
          };
        }
        return report;
      });
      return {
        ...state,
        userReports: updatedReports,
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

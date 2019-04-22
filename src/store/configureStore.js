import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import fetchReducer from '../reducers/fetchReducers';
import reportReducer from '../reducers/reportReducer';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(
    combineReducers({
      auth: authReducer,
      fetchStatus: fetchReducer,
      report: reportReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

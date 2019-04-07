import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/extensions
import AppRouter from './router/AppRouter.jsx';
import configureStore from './store/configureStore';

import './styles/index.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

module.hot.accept();

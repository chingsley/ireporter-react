import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/test.scss';

const title = 'Authors Haven';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();

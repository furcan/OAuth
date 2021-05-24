import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'presentation/pages/home/Home';

import 'presentation/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('OAuth'),
);

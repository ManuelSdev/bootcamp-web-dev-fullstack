import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth')
configureClient({ accessToken });
ReactDOM.render(
  <Router>
    <App isInitiallyLogged={!!accessToken} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

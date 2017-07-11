import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './assets/style.scss';

import store from './store';
import AppProvider from './provider';
import router from './router';


ReactDOM.render((
  <ReduxProvider store={store}>
    <AppProvider>
      {router}
    </AppProvider>
  </ReduxProvider>
), document.getElementById('appRoot'));

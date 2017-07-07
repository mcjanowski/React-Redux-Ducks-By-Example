import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import store from './store';


ReactDOM.render((
  <ReduxProvider store={store}>
    <div>Works fine</div>
  </ReduxProvider>
), document.getElementById('appRoot'));

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';


function configureStore(initialState) {
  return createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(
        promiseMiddleware({
          promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
        }),
      ),
    ),
  );
}

const initialState = {};

export default configureStore(initialState);

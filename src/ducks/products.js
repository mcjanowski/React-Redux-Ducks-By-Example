import { createAction, handleActions } from 'redux-actions';

import { getList } from './ducks-helper';


// Action Creators
export const getProducts = createAction('GET_PRODUCTS', params => getList('products', params));


// Reducer
const initialState = {
  objects: [],
  loading: false,
  error: null,
};

export default handleActions({
  GET_PRODUCTS_LOADING: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  GET_PRODUCTS_SUCCESS: (state, { payload }) => ({
    ...state,
    objects: payload.data,
    loading: false,
  }),
  GET_PRODUCTS_ERROR: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
}, initialState);

// Selectors


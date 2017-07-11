import { createAction, handleActions } from 'redux-actions';

import { getItemById, saveItem } from './ducks-helper';


// Action Creators
export const getProduct = createAction('GET_PRODUCT', id => getItemById('products', id));
export const saveProduct = createAction('SAVE_PRODUCT', productData => saveItem('products', productData));

// Reducer
const INITIAL_STATE = {
  object: null,
  loading: false,
  error: null,
};

export default handleActions({
  GET_PRODUCT_LOADING: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  GET_PRODUCT_SUCCESS: (state, { payload }) => ({
    ...state,
    object: payload.data,
    loading: false,
  }),
  GET_PRODUCT_ERROR: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
  SAVE_PRODUCT_LOADING: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  SAVE_PRODUCT_SUCCESS: (state, { payload }) => ({
    ...state,
    object: payload.data,
    loading: false,
  }),
  SAVE_PRODUCT_ERROR: (state, { payload }) => ({
    ...state,
    error: payload.response.data,
    loading: false,
  }),
}, INITIAL_STATE);

// Selectors


// API, Side-effects

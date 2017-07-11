import { createAction, handleActions } from 'redux-actions';

import { getList } from './ducks-helper';


// Action Creators
export const getOrders = createAction('GET_ORDERS', params => getList('orders', params));


// Reducer
const initialState = {
  objects: [],
  loading: false,
  error: null,
};

export default handleActions({
  GET_ORDERS_LOADING: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  GET_ORDERS_SUCCESS: (state, { payload }) => ({
    ...state,
    objects: payload.data.objects,
    loading: false,
  }),
  GET_ORDERS_ERROR: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
}, initialState);

// Selectors


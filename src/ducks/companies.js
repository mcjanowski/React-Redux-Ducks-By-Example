import { createAction, handleActions } from 'redux-actions';

import { getList } from './ducks-helper';


// Action Creators
export const getCompanies = createAction('GET_COMPANIES', params => getList('companies', params));


// Reducer
const initialState = {
  objects: [],
  loading: false,
  error: null,
};

export default handleActions({
  GET_COMPANIES_LOADING: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  GET_COMPANIES_SUCCESS: (state, { payload }) => ({
    ...state,
    objects: payload.data.objects,
    loading: false,
  }),
  GET_COMPANIES_ERROR: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
}, initialState);

// Selectors


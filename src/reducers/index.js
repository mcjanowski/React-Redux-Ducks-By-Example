import { combineReducers } from 'redux';

// Reducers
import { reducer as formReducer } from 'redux-form';


// Combine Reducers
const reducers = combineReducers({
  form: formReducer,
});

export default reducers;

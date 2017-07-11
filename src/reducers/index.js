import { combineReducers } from 'redux';

// Reducers
import { reducer as formReducer } from 'redux-form';
import companiesReducer from '../ducks/companies';
import productsReducer from '../ducks/products';
import ordersReducer from '../ducks/orders';


// Combine Reducers
const reducers = combineReducers({
  companiesState: companiesReducer,
  productsState: productsReducer,
  ordersState: ordersReducer,
  form: formReducer,
});

export default reducers;

import { combineReducers } from 'redux';

// Reducers
import { reducer as formReducer } from 'redux-form';
import companiesReducer from '../ducks/companies';
import productsReducer from '../ducks/products';
import productReducer from '../ducks/product';
import ordersReducer from '../ducks/orders';


// Combine Reducers
const reducers = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  companiesState: companiesReducer,
  ordersState: ordersReducer,
  form: formReducer,
});

export default reducers;

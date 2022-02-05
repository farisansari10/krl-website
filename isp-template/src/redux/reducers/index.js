import { combineReducers } from 'redux';

import productsReducer from './productReducer'
import cartReducer from './cart';
export default combineReducers({ productsReducer, cartReducer });
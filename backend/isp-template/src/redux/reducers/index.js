import { combineReducers } from 'redux';

import productsReducer from './productReducer'
import cartReducer from './cart';
import userReducer from './userReducer';

export default combineReducers({ productsReducer, cartReducer, userReducer });
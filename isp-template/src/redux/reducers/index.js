import { combineReducers } from 'redux';

import productsReducer from './productReducer'
import Reducer from './Reducer';
export default combineReducers({ productsReducer, Reducer });
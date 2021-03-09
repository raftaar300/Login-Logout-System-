import { combineReducers } from 'redux';

import { authReducer , UserSeacrch}from './reducer.js';

export const reducers = combineReducers({ authReducer , UserSeacrch});

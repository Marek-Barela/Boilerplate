import { combineReducers } from 'redux';
import counter from '../counter/reducer';

const reducerMap = {
  counter
};

const rootReducer = combineReducers(reducerMap);

export {
  rootReducer
};
import {
  combineReducers
} from 'redux';
import timer from '../timer/reducer';
import counter from '../counter/reducer';

const reducerMap = {
  timer,
  counter
};

const rootReducer = combineReducers(reducerMap);

export {
  rootReducer
};
import { combineReducers } from 'redux';
import counter from '../timer/reducer';

const reducerMap = {
  counter
};

const rootReducer = combineReducers(reducerMap);

export { rootReducer };

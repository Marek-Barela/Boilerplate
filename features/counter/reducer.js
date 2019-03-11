import { incrementCounter, decrementCounter } from './actions';
import { getType } from 'typesafe-actions';

export const initialState = {
  count: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case (getType(incrementCounter)):
      return {
        ...state,
        count: state.count + 1
      }

    case (getType(decrementCounter)):
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

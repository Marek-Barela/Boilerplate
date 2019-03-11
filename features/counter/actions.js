import {
  createAction
} from 'typesafe-actions';

export const incrementCounter = createAction(
  "counter/INCREMENT"
);

export const decrementCounter = createAction(
  "counter/DECREMENT"
);
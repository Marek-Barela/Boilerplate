import { fork } from 'redux-saga/effects';
import timer from '../timer/saga';
import counter from '../counter/saga';

export default function* rootSaga() {
  yield fork(timer);
  yield fork(counter);
}
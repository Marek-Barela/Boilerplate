import { fork } from 'redux-saga/effects';
import timer from '../timer/saga';

export default function* rootSaga() {
  yield fork(timer);
}
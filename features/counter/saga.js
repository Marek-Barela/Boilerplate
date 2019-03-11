import * as api from './api';
import { fetchCounter, fetchCounterRequest } from "./actions";
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

export function* handleFetchCounter() {
  try {
    yield put(fetchCounterRequest.request());
    const swapiResponse = yield call(api.getCounterFromSwapi);
    yield put(fetchCounterRequest.success((swapiResponse.mass)));
  } catch (err) {
    console.log(err);
    yield put(fetchCounterRequest.failure(err));
  }
}

export default function* () {
  yield all([
    takeEvery(getType(fetchCounter), handleFetchCounter),
  ]);
}

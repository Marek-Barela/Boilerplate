/* global fetch */
import * as api from './api';
import { fetchCounter, fetchCounterRequest } from "./actions";
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
es6promise.polyfill()

export function* handleFetchCounter() {
  try {
    yield put(fetchCounterRequest.request());
    const swapiResponse = yield call(api.getCounterFromSwapi);
    console.log(swapiResponse)
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

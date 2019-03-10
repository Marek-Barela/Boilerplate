/* global fetch */

import { all, call } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
es6promise.polyfill()

function* runClockSaga() {
  console.log("Saga Works!")
}

export default function* () {
  yield all([
    call(runClockSaga),
  ])
}

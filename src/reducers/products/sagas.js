
import { select, call, put, take, fork } from 'redux-saga/effects'

import { Get } from 'lib/Request'

export const getProducts = ({ types, selectors }) => function* (addMore) {
  try {
    const status = yield select(selectors.getStatus)

    if(status !== 'READY' || addMore) {
      yield put({ type: types.FETCH_PENDING })

      const payload = yield call(Get, 'products')

      yield put({ payload, type: types.FETCH_FULFILLED })
    }
    // else is Loaded from Server
  } catch (err) {
    const { type, message, response: { data: { message: messageResponse } = {} } = {} } = err
    switch (type) {
      case 'cancel':
        yield put({ type: types.FETCH_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.FETCH_FAILURE
        })
        break
    }
  }
}

export const watchProductsServer = ({ types, sagas }) => fork(function* () {
  while (true) {
    const { addMore } = yield take(types.FETCH)
    yield fork(sagas.getProducts, addMore)
  }
})

import { call, put } from 'redux-saga/effects'
import { Get, Put } from 'lib/Request'
import notify from 'lib/Notify'

export const getSettings = ({ types }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })

    const { data } = yield call(Get, '/settings')

    yield put({
      payload: data,
      type   : types.FETCH_FULFILLED
    })
  } catch (e) {
    const { type, message, response: { data: { message: messageResponse } = {} } = {} } = e
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

export const updateSettings = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.PUT_PENDING })

    const formData = new FormData()
    const payloadData = Object.keys(payload)
    payloadData.map(item => {
      formData.append(item, payload[item])
    })

    const { data, success } = yield call(Put, '/settings', formData)

    if(success)
      notify.success('!Was updated correctly!', { time: 5000 })
    else
      notify.error('!An error occurred!', { time: 5000 })

    yield put({
      payload: data,
      type   : types.PUT_FULFILLED
    })
  } catch (e) {
    const { type, message, response: { data: { message: messageResponse } = {} } = {} } = e
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

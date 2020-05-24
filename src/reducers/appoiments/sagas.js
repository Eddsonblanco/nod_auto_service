import { GetList, Delete, Post, Get } from 'lib/Request'
import { put, call, select } from 'redux-saga/effects'

export const getAppoiments = ({ types, selectors }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })
    const getPagination = yield select(selectors.pagination)

    const params = {
      page   : getPagination.page,
      perPage: getPagination.perPage
    }

    const { data: { rows, pagination, columns } } = yield call(GetList, '/appoiments', params)

    yield put({
      payload: {
        columns,
        pagination,
        rows
      },
      type: types.FETCH_FULFILLED
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

export const removeService = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.DELETE_PENDING })
    const { success } = yield call(Delete, `/services/${id}`)
    yield put({
      payload: {
        id,
        success
      },
      type: types.DELETE_SERVICE_FULFILLED
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

export const createAppoiment = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.POST_PENDING })

    const { data, success } = yield call(Post, '/appoiments', payload)
    yield put({
      payload: {
        data,
        success
      },
      type: types.POST_APPOIMENT_FULFILLED
    })
  } catch (e) {
    const { type, message, response: { data: { message: messageResponse } = {} } = {} } = e
    switch (type) {
      case 'cancel':
        yield put({ type: types.POST_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.POST_FAILURE
        })
        break
    }
  }
}

export const getAppoiment = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.FETCH_PENDING })
    const { data: appoiment, success } = yield call(Get, `/appoiments/${id}`)
    yield put({
      payload: {
        appoiment,
        success
      },
      type: types.FETCH_FULFILLED
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

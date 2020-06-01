import { GetList, Delete, Post, Get, Put } from 'lib/Request'
import { put, call, select } from 'redux-saga/effects'
import notify from 'lib/Notify'
import usersDucks from 'reducers/users'

export const getTestimonials = ({ types, selectors }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })
    const getPagination = yield select(selectors.pagination)

    const params = {
      page   : getPagination.page,
      perPage: getPagination.perPage
    }

    const { data: { rows, pagination, columns } } = yield call(GetList, '/testimonials', params)

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

export const removeTestimonial = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.DELETE_PENDING })
    const cookies = yield select(usersDucks.selectors.getCookies)

    const { success } = yield call(Delete, `/testimonials/${id}`, {}, {
      Authorization: `Bearer ${cookies}`
    })
    if(success)
      notify.success('!Successfully removed!', { time: 5000 })
    else
      notify.error('!An error occurred!', { time: 5000 })
    yield put({
      payload: {
        id,
        success
      },
      type: types.DELETE_TESTIMONIAL_FULFILLED
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

export const createTestimonial = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.POST_PENDING })
    const cookies = yield select(usersDucks.selectors.getCookies)

    const { data, success } = yield call(Post, '/testimonials', payload, {
      Authorization: `Bearer ${cookies}`
    })
    if(success)
      notify.success('!Created successfully!', { time: 5000 })
    else
      notify.error('!An error occurred!', { time: 5000 })
    yield put({
      payload: {
        data,
        success
      },
      type: types.POST_TESTIMONIAL_FULFILLED
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

export const getTestimonial = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.FETCH_PENDING })
    const { data: testimonial, success } = yield call(Get, `/testimonials/${id}`)
    yield put({
      payload: {
        success,
        testimonial
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

export const updateTestimonial = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.PUT_PENDING })
    const cookies = yield select(usersDucks.selectors.getCookies)

    const { data, success } = yield call(Put, '/testimonials', payload, {
      Authorization: `Bearer ${cookies}`
    })
    if(success)
      notify.success('!Was updated correctly!', { time: 5000 })
    else
      notify.error('!An error occurred!', { time: 5000 })
    yield put({
      payload: {
        data,
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

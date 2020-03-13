import { GetList, Delete, Post, Get, Put } from 'lib/Request'
import { put, call, select } from 'redux-saga/effects'

export const getCompanies = ({ types, selectors }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })
    const getPagination = yield select(selectors.pagination)

    const params = {
      page   : getPagination.page,
      perPage: getPagination.perPage
    }

    const { data: { rows, pagination, columns } } = yield call(GetList, '/companies', params)

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

export const removeCompany = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.DELETE_PENDING })
    const { success } = yield call(Delete, `/companies/${id}`)
    yield put({
      payload: {
        id,
        success
      },
      type: types.DELETE_COMPANY_FULFILLED
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

export const createCompany = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.POST_PENDING })
    const formData = new FormData()
    const payloadData = Object.keys(payload)
    payloadData.map(item => {
      formData.append(item, payload[item])
    })
    const { data, success } = yield call(Post, '/companies', formData, {
      'content-type': 'multipart/form-data'
    })
    yield put({
      payload: {
        data,
        success
      },
      type: types.POST_COMPANY_FULFILLED
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

export const getCompany = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.FETCH_PENDING })
    const { data: company, success } = yield call(Get, `/companies/${id}`)
    yield put({
      payload: {
        company,
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

export const updateCompany = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.PUT_PENDING })
    const formData = new FormData()
    const payloadData = Object.keys(payload)
    payloadData.map(item => {
      formData.append(item, payload[item])
    })
    // const { data, success } = yield call(Post, '/companies', formData, {
    //   'content-type': 'multipart/form-data'
    // })

    const data = yield call(Put, '/companies', formData)
    console.log('===> XAVI <===: updateCompany -> data', data)
    // yield put({
    //   payload: {
    //     company,
    //     success
    //   },
    //   type: types.FETCH_FULFILLED
    // })
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

import { GetList, Delete, Post, Get, Put } from 'lib/Request'
import notify from 'lib/Notify'
import { put, call, select } from 'redux-saga/effects'
import usersDucks from 'reducers/users'

export const getBanners = ({ types, selectors }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })
    const getPagination = yield select(selectors.pagination)

    const params = {
      page   : getPagination.page,
      perPage: getPagination.perPage
    }

    const { data: { rows, pagination, columns } } = yield call(GetList, '/banners', params)

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

export const removeBanner = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.DELETE_PENDING })
    const cookies = yield select(usersDucks.selectors.getCookies)

    const { success } = yield call(Delete, `/banners/${id}`,{}, {
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
      type: types.DELETE_BANNER_FULFILLED
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

export const createBanner = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.POST_PENDING })
    const cookies = yield select(usersDucks.selectors.getCookies)
    const formData = new FormData()
    const payloadData = Object.keys(payload)
    payloadData.map(item => {
      formData.append(item, payload[item])
    })
    const { data, success } = yield call(Post, '/banners', formData, {
      Authorization : `Bearer ${cookies}`,
      'content-type': 'multipart/form-data'
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
      type: types.POST_BANNER_FULFILLED
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

export const getBanner = ({ types }) => function* ({ id }) {
  try {
    yield put({ type: types.FETCH_PENDING })
    const { data: banner, success } = yield call(Get, `/banners/${id}`)
    yield put({
      payload: {
        banner,
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

export const updateBanner = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.PUT_PENDING })
    const cookies = yield select(usersDucks.selectors.getCookies)

    const formData = new FormData()
    const payloadData = Object.keys(payload)
    payloadData.map(item => {
      formData.append(item, payload[item])
    })
    // const { data, success } = yield call(Post, '/companies', formData, {
    //   'content-type': 'multipart/form-data'
    // })

    const { data, success } = yield call(Put, '/banners', formData, {
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
      type: types.PUT_FULFILLED
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

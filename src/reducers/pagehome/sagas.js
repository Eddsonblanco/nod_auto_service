import notify from 'lib/Notify'
import { Get, Put } from 'lib/Request'
import { select, call, put, take, fork } from 'redux-saga/effects'

export const getPageConfig = ({ types, selectors }) => function* () {
  try {
    const status = yield select(selectors.getStatus)

    if(status !== 'READY') {
      // eslint-disable-next-line no-restricted-syntax
      console.log('********* NOT is Loaded from Server *********')

      yield put({ type: types.FETCH_PENDING })

      const { data: dataHome } = yield call(Get, '/page_home')
      const { data: dataTestimonials } = yield call(Get, '/testimonials/home')
      const { data: dataBanners } = yield call(Get, '/banners/home')
      const { data: dataServices } = yield call(Get, '/services/home')

      const data = {
        ...dataHome,
        banners     : dataBanners,
        services    : dataServices,
        testimonials: dataTestimonials

      }

      yield put({
        payload: data,
        type   : types.FETCH_FULFILLED
      })
    } else {
      // eslint-disable-next-line no-restricted-syntax
      console.log('********* is Loaded from Server *********')
    }
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

export const updatePageConfig = ({ types, selectors }) => function* () {
  try {
    yield put({ type: types.PUT_PENDING })
    const getAllCheckbox = yield select(selectors.getAllCheckbox)

    const { data, success } = yield call(Put, '/page_home', getAllCheckbox)

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
        yield put({ type: types.PUT_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.PUT_FAILURE
        })
        break
    }
  }
}

export const watchPageHomeServer = ({ types, sagas }) => fork(function* () {
  while (true) {
    yield take(types.FETCH)
    yield fork(sagas.getPageConfig)
  }
})

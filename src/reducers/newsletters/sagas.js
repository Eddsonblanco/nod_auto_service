import { Post, GetList } from 'lib/Request'
import { put, call, select } from 'redux-saga/effects'

export const getNewsletters = ({ types, selectors }) => function* () {
  try {
    yield put({ type: types.FETCH_PENDING })

    const getPagination = yield select(selectors.pagination)

    const params = {
      page   : getPagination.page,
      perPage: getPagination.perPage
    }

    const { data: { columns, rows, pagination } } = yield call(GetList, '/newsletters', params)

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

export const createNewsletter = ({ types }) => function* ({ data }) {
  try {
    yield put({ type: types.POST_PENDING })

    const { success: messageSend } = yield call(Post, '/newsletters', { email: data })

    yield put({
      payload: {
        messageSend
      },
      type: types.POST_FULFILLED
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

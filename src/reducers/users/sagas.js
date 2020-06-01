import { call, put } from 'redux-saga/effects'
import notify from 'lib/Notify'
import { Post } from 'lib/Request'
import Cookies from 'js-cookie'

export const login = ({ types }) => function* ({ payload }) {
  try {
    yield put({ type: types.POST_PENDING })

    const { data } = yield call(Post, '/login', payload)
    if(data && data.token)
      Cookies.set('accessToken', data.token)

    yield put({
      payload: {
        cookies: data.token
      },
      type: types.POST_lOGIN_SUCCESS
    })
  } catch (e) {
    const { type, message, response: { data: { error: messageResponse } = {} } = {} } = e
    switch (type) {
      case 'cancel':
        yield put({ type: types.POST_CANCEL })
        break
      default:
        notify.error(messageResponse, { time: 5000 })
        yield put({
          error: messageResponse || message,
          type : types.POST_FAILURE
        })
        break
    }
  }
}

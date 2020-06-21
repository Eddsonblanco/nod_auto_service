// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from 'reducers/base'
import produce from 'immer'

import { takeEvery } from 'redux-saga/effects'

import {
  login
} from './sagas'

export default base({
  initialState: {
    cookies: null
  },
  namespace: 'nod_services',
  store    : 'users'
}).extend({
  creators: ({ types }) => ({
    login     : payload => ({ payload, type: types.POST }),
    setCookies: cookies => ({ cookies, type: types.REHYDRATE_AUTH })

  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.POST_lOGIN_SUCCESS:

          draft.cookies = action.payload.cookies

          draft.status = 'USER_LOGIN'

          return

        case types.REHYDRATE_AUTH:
          draft.cookies = action.cookies

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    login: login(duck)
  }),
  selectors: ({ store }) => ({
    getCookies: state => state[store].cookies
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.POST, sagas.login)
  ],
  types: [
    'POST_lOGIN_SUCCESS',
    'REHYDRATE_AUTH'
  ]
})

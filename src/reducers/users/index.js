// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from 'reducers/base'
import produce from 'immer'

import { takeEvery } from 'redux-saga/effects'

import {
  login
} from './sagas'

export default base({
  initialState: {

  },
  namespace: 'nod_services',
  store    : 'users'
}).extend({
  creators: ({ types }) => ({
    login: payload => ({ payload, type: types.POST })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.POST_lOGIN_SUCCESS:

          draft.status = 'USER_LOGIN'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    login: login(duck)
  }),
  selectors: ({ store }) => ({

  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.POST, sagas.login)
  ],
  types: [
    'POST_lOGIN_SUCCESS'
  ]
})

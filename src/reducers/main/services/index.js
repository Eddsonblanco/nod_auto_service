// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
// import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getServices,
  getService
} from './sagas'

export default base({
  initialState: {
    columns   : [],
    pagination: {
      page   : 1,
      perPage: 100,
      total  : 0
    },
    rows   : [],
    service: {}
  },
  namespace: 'nod-services',
  store    : 'main_services'
}).extend({
  creators: ({ types }) => ({
    getService : url => ({ type: types.FETCH_SERVICE, url }),
    getServices: () => ({ type: types.FETCH })
  }),
  // reducer: (state, action, { types }) =>
  //   produce(state, draft => {
  //     switch (action.type) {
  //       default:
  //         return
  //     }
  //   }),
  sagas: duck => ({
    getService : getService(duck),
    getServices: getServices(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getServices),
    takeEvery(types.FETCH_SERVICE, sagas.getService)
  ],
  types: [
    'FETCH_SERVICE'
  ]
})

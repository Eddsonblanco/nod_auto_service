// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getServices,
  removeService,
  createService,
  getService,
  updateService
} from './sagas'

export default base({
  initialState: {
    columns   : [],
    pagination: {
      page   : 1,
      perPage: 10,
      total  : 0
    },
    rows         : [],
    service      : {},
    serviceDetail: {}
  },
  namespace: 'nod-services',
  store    : 'services'
}).extend({
  creators: ({ types }) => ({
    createService: payload => ({ payload, type: types.CREATE_SERVICE }),
    getService   : id => ({ id, type: types.FETCH_SERVICE }),
    getServices  : () => ({ type: types.FETCH }),
    removeService: id => ({ id, type: types.REMOVE_SERVICE }),
    resetService : () => ({ type: types.RESET_SERVICE }),
    updateService: payload => ({ payload, type: types.UPDATE_SERVICE })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.DELETE_SERVICE_FULFILLED:
          if(action.payload.success)
            draft.rows = state.rows.filter(item => item._id !== action.payload.id)

          draft.status = 'DELETE_FULFILLED'

          return

        case types.POST_SERVICE_FULFILLED:
          draft.rows = [
            action.payload.data,
            ...state.rows
          ]

          draft.status = 'SERVICE_CREATED'

          return

        case types.RESET_SERVICE:
          draft.service = {}

          draft.status = 'RESET_SERVICE_FULLFILED'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createService: createService(duck),
    getService   : getService(duck),
    getServices  : getServices(duck),
    removeService: removeService(duck),
    updateService: updateService(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getServices),
    takeEvery(types.REMOVE_SERVICE, sagas.removeService),
    takeEvery(types.CREATE_SERVICE, sagas.createService),
    takeEvery(types.FETCH_SERVICE, sagas.getService),
    takeEvery(types.UPDATE_SERVICE, sagas.updateService)
  ],
  types: [
    'REMOVE_SERVICE',
    'DELETE_SERVICE_FULFILLED',
    'CREATE_SERVICE',
    'POST_SERVICE_FULFILLED',
    'FETCH_SERVICE',
    'RESET_SERVICE',
    'UPDATE_SERVICE'
  ]
})

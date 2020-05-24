// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getAppoiments,
  // removeService,
  createAppoiment,
  getAppoiment
// updateService
} from './sagas'

export default base({
  initialState: {
    appoiment : undefined,
    columns   : [],
    pagination: {
      page   : 1,
      perPage: 10,
      total  : 0
    },
    rows         : [],
    serviceDetail: null
  },
  namespace: 'nod-services',
  store    : 'appoiments'
}).extend({
  creators: ({ types }) => ({
    closeConfirm   : () => ({ type: types.CLOSE_CONFIRM }),
    createAppoiment: payload => ({ payload, type: types.CREATE_APPOIMENT }),
    getAppoiment   : id => ({ id, type: types.FETCH_APPOIMENT }),
    getAppoiments  : () => ({ type: types.FETCH }),
    // removeService: id => ({ id, type: types.REMOVE_SERVICE }),
    resetAppoiment : () => ({ type: types.RESET_APPOIMENT })
    // updateService: payload => ({ payload, type: types.UPDATE_SERVICE })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.RESET_APPOIMENT:
          draft.appoiment = undefined

          draft.status = 'RESET_APPOIMENT'

          return

        case types.POST_APPOIMENT_FULFILLED:
          draft.rows = [
            action.payload.data,
            ...state.rows
          ]

          draft.status = 'APPOIMENT_CREATED'

          return

        case types.CLOSE_CONFIRM:

          draft.status = 'CLOSE_APPOIMENT'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createAppoiment: createAppoiment(duck),
    getAppoiment   : getAppoiment(duck),
    getAppoiments  : getAppoiments(duck)
    // removeService: removeService(duck),
    // updateService: updateService(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getAppoiments),
    // takeEvery(types.REMOVE_SERVICE, sagas.removeService),
    takeEvery(types.CREATE_APPOIMENT, sagas.createAppoiment),
    takeEvery(types.FETCH_APPOIMENT, sagas.getAppoiment)
    // takeEvery(types.UPDATE_SERVICE, sagas.updateService)
  ],
  types: [
    'CREATE_APPOIMENT',
    'POST_APPOIMENT_FULFILLED',
    'CLOSE_CONFIRM',
    'FETCH_APPOIMENT',
    'RESET_APPOIMENT'
  ]
})

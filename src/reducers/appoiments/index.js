// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getAppoiments,
  // removeService,
  createAppoiment
// getService,
// updateService
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
    // service      : {},
    serviceDetail: null
  },
  namespace: 'nod-services',
  store    : 'appoiments'
}).extend({
  creators: ({ types }) => ({
    createAppoiment: payload => ({ payload, type: types.CREATE_APPOIMENT }),
    // getService   : id => ({ id, type: types.FETCH_SERVICE }),
    getAppoiments  : () => ({ type: types.FETCH })
    // removeService: id => ({ id, type: types.REMOVE_SERVICE }),
    // resetService : () => ({ type: types.RESET_SERVICE }),
    // updateService: payload => ({ payload, type: types.UPDATE_SERVICE })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        // case types.DELETE_SERVICE_FULFILLED:
        //   if(action.payload.success)
        //     draft.rows = state.rows.filter(item => item._id !== action.payload.id)

        //   draft.status = 'DELETE_FULFILLED'

        //   return

        case types.POST_APPOIMENT_FULFILLED:
          draft.rows = [
            action.payload.data,
            ...state.rows
          ]

          draft.status = 'APPOIMENT_CREATED'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createAppoiment: createAppoiment(duck),
    // getService   : getService(duck),
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
    takeEvery(types.CREATE_APPOIMENT, sagas.createAppoiment)
    // takeEvery(types.FETCH_SERVICE, sagas.getService),
    // takeEvery(types.UPDATE_SERVICE, sagas.updateService)
  ],
  types: [
    'CREATE_APPOIMENT',
    'POST_APPOIMENT_FULFILLED'
  ]
})

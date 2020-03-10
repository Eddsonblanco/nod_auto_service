// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getCompanies,
  removeCompany
} from './sagas'

export default base({
  initialState: {
    columns   : [],
    pagination: {
      page   : 1,
      perPage: 10,
      total  : 0
    },
    rows: []
  },
  namespace: 'nod-services',
  store    : 'companies'
}).extend({
  creators: ({ types }) => ({
    getCompanies : () => ({ type: types.FETCH }),
    removeCompany: id => ({ id, type: types.REMOVE_COMPANY })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.DELETE_COMPANY_FULFILLED:
          if(action.payload.success)
            draft.rows = state.rows.filter(item => item._id !== action.payload.id)

          draft.status = 'DELETE_FULFILLED'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    getCompanies : getCompanies(duck),
    removeCompany: removeCompany(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getCompanies),
    takeEvery(types.REMOVE_COMPANY, sagas.removeCompany)
  ],
  types: [
    'REMOVE_COMPANY',
    'DELETE_COMPANY_FULFILLED'
  ]
})

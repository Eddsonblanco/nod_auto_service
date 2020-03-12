// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getCompanies,
  removeCompany,
  createCompany,
  getCompany
} from './sagas'

export default base({
  initialState: {
    columns   : [],
    company   : {},
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
    createCompany: payload => ({ payload, type: types.CREATE_COMPANY }),
    getCompanies : () => ({ type: types.FETCH }),
    getCompany   : id => ({ id, type: types.FETCH_COMPANY }),
    removeCompany: id => ({ id, type: types.REMOVE_COMPANY }),
    resetCompany : () => ({ type: types.RESET_COMPANY })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.DELETE_COMPANY_FULFILLED:
          if(action.payload.success)
            draft.rows = state.rows.filter(item => item._id !== action.payload.id)

          draft.status = 'DELETE_FULFILLED'

          return

        case types.POST_COMPANY_FULFILLED:
          draft.rows = [
            action.payload.data,
            ...state.rows
          ]

          draft.status = 'COMPANY_CREATED'

          return

        case types.RESET_COMPANY:
          draft.company = {}

          draft.status = 'RESET_COMPANY_FULLFILED'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createCompany: createCompany(duck),
    getCompanies : getCompanies(duck),
    getCompany   : getCompany(duck),
    removeCompany: removeCompany(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getCompanies),
    takeEvery(types.REMOVE_COMPANY, sagas.removeCompany),
    takeEvery(types.CREATE_COMPANY, sagas.createCompany),
    takeEvery(types.FETCH_COMPANY, sagas.getCompany)
  ],
  types: [
    'REMOVE_COMPANY',
    'DELETE_COMPANY_FULFILLED',
    'CREATE_COMPANY',
    'POST_COMPANY_FULFILLED',
    'FETCH_COMPANY',
    'RESET_COMPANY'
  ]
})

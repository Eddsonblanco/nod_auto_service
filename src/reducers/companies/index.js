// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getCompanies
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
    getCompanies: () => ({ type: types.FETCH })
  }),
  sagas: duck => ({
    getCompanies: getCompanies(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getCompanies)
  ],
  types: [
  ]
})

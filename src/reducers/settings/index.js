import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'

import {
  getSettings,
  updateSettings,
  watchServer
} from './sagas'

export default base({
  initialState: {
    _id        : null,
    copyright  : '',
    descrition : '',
    direction  : '',
    email      : '',
    logo       : '',
    phone      : '',
    phone_extra: '',
    title      : ''
  },
  namespace: 'nod_services',
  store    : 'settings'
}).extend({
  creators: ({ types }) => ({
    getSettings   : () => ({ [WAIT_FOR_ACTION]: types.FETCH_FULFILLED, type: types.FETCH }),
    updateSettings: payload => ({ payload, type: types.UPDATE_SETTINGS })
  }),
  sagas: duck => ({
    getSettings   : getSettings(duck),
    updateSettings: updateSettings(duck)
  }),
  selectors: ({ store }) => ({
    getStatus: state => state[store].status
  }),
  takes: (duck) => [
    watchServer(duck),
    // takeEvery(types.FETCH, sagas.getSettings),
    takeEvery(duck.types.UPDATE_SETTINGS, duck.sagas.updateSettings)
  ],
  types: [
    'UPDATE_SETTINGS'
  ]
})

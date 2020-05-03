// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'

import {
  getSettings,
  updateSettings
} from './sagas'

export default base({
  initialState: {
    _id        : null,
    copyright  : '',
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
    getSettings   : () => ({ type: types.FETCH }),
    updateSettings: payload => ({ payload, type: types.UPDATE_SETTINGS })
  }),
  sagas: duck => ({
    getSettings   : getSettings(duck),
    updateSettings: updateSettings(duck)
  }),
  selectors: ({ store }) => ({

  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getSettings),
    takeEvery(types.UPDATE_SETTINGS, sagas.updateSettings)
  ],
  types: [
    'UPDATE_SETTINGS'
  ]
})

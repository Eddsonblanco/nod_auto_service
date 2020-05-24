// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from 'reducers/base'
import { takeEvery } from 'redux-saga/effects'

import {
  getAbouts,
  updateAbouts
} from './sagas'

export default base({
  initialState: {
    _id          : null,
    block1       : '',
    block2       : '',
    block3       : '',
    image1       : '',
    image2       : '',
    paragraph_end: '',
    sub_title_end: '',
    title        : '',
    title_end    : ''
  },
  namespace: 'nod_services',
  store    : 'abouts'
}).extend({
  creators: ({ types }) => ({
    getAbouts   : () => ({ type: types.FETCH }),
    updateAbouts: payload => ({ payload, type: types.UPDATE_ABOUTS })
  }),
  sagas: duck => ({
    getAbouts   : getAbouts(duck),
    updateAbouts: updateAbouts(duck)
  }),
  selectors: ({ store }) => ({

  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getAbouts),
    takeEvery(types.UPDATE_ABOUTS, sagas.updateAbouts)
  ],
  types: [
    'UPDATE_ABOUTS'
  ]
})

// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getBanners,
  removeBanner,
  createBanner,
  getBanner,
  updateBanner
} from './sagas'

export default base({
  initialState: {
    banner    : {},
    columns   : [],
    pagination: {
      page   : 1,
      perPage: 10,
      total  : 0
    },
    rows: []
  },
  namespace: 'nod-services',
  store    : 'banners'
}).extend({
  creators: ({ types }) => ({
    createBanner: payload => ({ payload, type: types.CREATE_BANNER }),
    getBanner   : id => ({ id, type: types.FETCH_BANNER }),
    getBanners  : () => ({ type: types.FETCH }),
    removeBanner: id => ({ id, type: types.REMOVE_BANNER }),
    resetBanner : () => ({ type: types.RESET_BANNER }),
    updateBanner: payload => ({ payload, type: types.UPDATE_BANNER })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.DELETE_BANNER_FULFILLED:
          if(action.payload.success)
            draft.rows = state.rows.filter(item => item._id !== action.payload.id)

          draft.status = 'DELETE_FULFILLED'

          return

        case types.POST_BANNER_FULFILLED:
          draft.rows = [
            action.payload.data,
            ...state.rows
          ]

          draft.status = 'BANNER_CREATED'

          return

        case types.RESET_BANNER:
          draft.banner = {}

          draft.status = 'RESET_BANNER_FULLFILED'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createBanner: createBanner(duck),
    getBanner   : getBanner(duck),
    getBanners  : getBanners(duck),
    removeBanner: removeBanner(duck),
    updateBanner: updateBanner(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getBanners),
    takeEvery(types.REMOVE_BANNER, sagas.removeBanner),
    takeEvery(types.CREATE_BANNER, sagas.createBanner),
    takeEvery(types.FETCH_BANNER, sagas.getBanner),
    takeEvery(types.UPDATE_BANNER, sagas.updateBanner)
  ],
  types: [
    'REMOVE_BANNER',
    'DELETE_BANNER_FULFILLED',
    'CREATE_BANNER',
    'POST_BANNER_FULFILLED',
    'FETCH_BANNER',
    'RESET_BANNER',
    'UPDATE_BANNER'
  ]
})

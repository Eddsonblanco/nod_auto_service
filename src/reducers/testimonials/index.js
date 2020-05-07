// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import produce from 'immer'
import { takeEvery } from 'redux-saga/effects'
import base from 'reducers/base'

import {
  getTestimonials,
  removeTestimonial,
  createTestimonial,
  getTestimonial,
  updateTestimonial
} from './sagas'

export default base({
  initialState: {
    columns   : [],
    pagination: {
      page   : 1,
      perPage: 10,
      total  : 0
    },
    rows       : [],
    testimonial: {}
  },
  namespace: 'nod-services',
  store    : 'testimonials'
}).extend({
  creators: ({ types }) => ({
    createTestimonial: payload => ({ payload, type: types.CREATE_TESTIMONIAL }),
    getTestimonial   : id => ({ id, type: types.FETCH_TESTIMONIAL }),
    getTestimonials  : () => ({ type: types.FETCH }),
    removeTestimonial: id => ({ id, type: types.REMOVE_TESTIMONIAL }),
    resetTestimonial : () => ({ type: types.RESET_TESTIMONIAL }),
    updateTestimonial: payload => ({ payload, type: types.UPDATE_TESTIMONIAL })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.DELETE_TESTIMONIAL_FULFILLED:
          if(action.payload.success)
            draft.rows = state.rows.filter(item => item._id !== action.payload.id)

          draft.status = 'DELETE_FULFILLED'

          return

        case types.POST_TESTIMONIAL_FULFILLED:
          draft.rows = [
            action.payload.data,
            ...state.rows
          ]

          draft.status = 'TESTIMONIAL_CREATED'

          return

        case types.RESET_TESTIMONIAL:
          draft.testimonial = {}

          draft.status = 'RESET_TESTIMONIAL_FULLFILED'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createTestimonial: createTestimonial(duck),
    getTestimonial   : getTestimonial(duck),
    getTestimonials  : getTestimonials(duck),
    removeTestimonial: removeTestimonial(duck),
    updateTestimonial: updateTestimonial(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.FETCH, sagas.getTestimonials),
    takeEvery(types.REMOVE_TESTIMONIAL, sagas.removeTestimonial),
    takeEvery(types.CREATE_TESTIMONIAL, sagas.createTestimonial),
    takeEvery(types.FETCH_TESTIMONIAL, sagas.getTestimonial),
    takeEvery(types.UPDATE_TESTIMONIAL, sagas.updateTestimonial)
  ],
  types: [
    'REMOVE_TESTIMONIAL',
    'DELETE_TESTIMONIAL_FULFILLED',
    'CREATE_TESTIMONIAL',
    'POST_TESTIMONIAL_FULFILLED',
    'FETCH_TESTIMONIAL',
    'RESET_TESTIMONIAL',
    'UPDATE_TESTIMONIAL'
  ]
})

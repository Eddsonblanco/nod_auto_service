import produce from 'immer'

import base from 'reducers/base'

import { takeEvery } from 'redux-saga/effects'

import { createNewsletter, getNewsletters } from './sagas'

export default base({
  initialState: {
    items      : [],
    messageSend: false,
    pagination : {
      page   : 1,
      perPage: 10,
      total  : 0
    }
  },
  namespace: 'nod-services',
  store    : 'newsletters'
}).extend({
  creators: ({ types }) => ({
    closeConfirm    : () =>  ({ type: types.CLOSE_DIALOG }),
    createNewsletter: data => ({ data, type: types.POST_NEWSLETTER }),
    getNewsletters  : () => ({ type: types.FETCH })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.CLOSE_DIALOG:
          draft.status = 'CLOSE_CONFIRM'

          return

        default:
          return
      }
    }),
  sagas: duck => ({
    createNewsletter: createNewsletter(duck),
    getNewsletters  : getNewsletters(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.POST_NEWSLETTER, sagas.createNewsletter),
    takeEvery(types.FETCH, sagas.getNewsletters)
  ],
  types: [
    'POST_NEWSLETTER',
    'CLOSE_DIALOG'
  ]
})

import base from 'reducers/base'

import { takeEvery } from 'redux-saga/effects'

import { createContact } from './sagas'

export default base({
  initialState: {
    items      : [],
    messageSend: false
  },
  namespace: 'nod-services',
  store    : 'contacts'
}).extend({
  creators: ({ types }) => ({
    createContact: data => ({ data, type: types.POST_CONTACT })
  }),
  sagas: duck => ({
    createContact: createContact(duck)
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.POST_CONTACT, sagas.createContact)
  ],
  types: [
    'POST_CONTACT'
  ]
})

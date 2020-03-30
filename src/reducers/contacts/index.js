import base from 'reducers/base'

import { takeEvery } from 'redux-saga/effects'

import { createContact, getContacts } from './sagas'

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
  store    : 'contacts'
}).extend({
  creators: ({ types }) => ({
    createContact: data => ({ data, type: types.POST_CONTACT }),
    getContacts  : () => ({ type: types.FETCH })
  }),
  sagas: duck => ({
    createContact: createContact(duck),
    getContacts  : getContacts(duck)
  }),
  selectors: ({ store }) => ({
    pagination: state => state[store].pagination
  }),
  takes: ({ types, sagas }) => [
    takeEvery(types.POST_CONTACT, sagas.createContact),
    takeEvery(types.FETCH, sagas.getContacts)
  ],
  types: [
    'POST_CONTACT'
  ]
})

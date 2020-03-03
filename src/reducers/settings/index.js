// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'

import base from 'reducers/base'

import {  } from './sagas'

export default base({
  initialState: {
    copyright  : 'copyright',
    direction  : 'direction',
    email      : 'prueba@email.com',
    logo       : '',
    phone      : '55-555-555',
    phone_extra: '',
    title      : ''
  },
  namespace: 'nod-services',
  store    : 'settings'
}).extend({
  // creators: ({ types }) => ({

  // }),
  // sagas: duck => ({
  // }),
  // selectors: ({ store }) => ({

  // }),
  // takes: duck => [

  // ],
  // types: [

  // ]
})

// import { WAIT_FOR_ACTION } from 'redux-wait-for-action'

import base from 'reducers/base'

import {} from './sagas'

export default base({
  initialState: {
    items: [
      {
        _id     : 1,
        alt_text: 'iamgen 1',
        image   : 'https://picsum.photos/id/237/200/300'
      },
      {
        _id     : 2,
        alt_text: 'iamgen 2',
        image   : 'https://picsum.photos/id/230/200/300'
      },
      {
        _id     : 3,
        alt_text: 'iamgen 3',
        image   : 'https://picsum.photos/id/240/200/300'
      }
    ]
  },
  namespace: 'nod-services',
  store    : 'companies'
}).extend({
  // creators : ({ types }) => ({}),
  // sagas    : duck => ({}),
  // selectors: ({ store }) => ({}),
  // takes    : duck => [],
  // types    : []
})

import { WAIT_FOR_ACTION } from "redux-wait-for-action";

import base from "reducers/base";

import {  } from "./sagas";

export default base({
  initialState: {
    title: '',
    direction: 'direction',
    phone: '55-555-555',
    phone_extra: '',
    logo: '',
    copyright: 'copyright',
    email: 'prueba@email.com'
  },
  namespace: "nod-services",
  store: "settings"
}).extend({
  creators: ({ types }) => ({

  }),
  sagas: duck => ({
  }),
  selectors: ({ store }) => ({

  }),
  takes: duck => [

  ],
  types: [

  ]
});

import { WAIT_FOR_ACTION } from "redux-wait-for-action";

import base from "reducers/base";

import {} from "./sagas";

export default base({
  initialState: {
    items: [
      {
        _id: 1,
        image: "https://picsum.photos/id/237/200/300",
        alt_text: "iamgen 1"
      },
      {
        _id: 2,
        image: "https://picsum.photos/id/230/200/300",
        alt_text: "iamgen 2"
      },
{
        _id: 3,
        image: 'https://picsum.photos/id/240/200/300',
        alt_text: 'iamgen 3'
      },
    ]
  },
  namespace: "nod-services",
  store: "companies"
}).extend({
  creators: ({ types }) => ({}),
  sagas: duck => ({}),
  selectors: ({ store }) => ({}),
  takes: duck => [],
  types: []
});

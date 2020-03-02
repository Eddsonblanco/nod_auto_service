import produce from 'immer'
import Cookies from 'js-cookie'

import base from './base'

export default base({
  initialState: {
    style: 'ligth'
  },
  namespace: 'crassa',
  store    : 'theme'
}).extend({
  creators: ({ types: { UPDATE_THEME } }) => ({
    updateTheme: theme => ({ theme, type: UPDATE_THEME })
  }),
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.UPDATE_THEME:
          Cookies.set('style', action.theme)
          draft.style = action.theme

          return
        default:
          draft.style =  Cookies.get('style') || state.style

          return
      }
    }),
  types: [ 'UPDATE_THEME' ]
})

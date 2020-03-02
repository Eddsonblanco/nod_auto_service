import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { all } from 'redux-saga/effects'

import theme from './theme'
import products from './products'

export default history => combineReducers({
  router          : connectRouter(history),
  [theme.store]   : theme.reducer,
  [products.store]: products.reducer
})

export function* rootSaga() {
  yield all([ ...products.takes ])
}

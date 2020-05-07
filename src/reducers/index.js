import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { all } from 'redux-saga/effects'

import theme from './theme'
import products from './products'
import settings from './settings'
import companies from './companies'
import contacts from './contacts'
import banners from './banners'
import testimonials from './testimonials'
import services from './services'

// admin
import pageHome from './pagehome'

export default history => combineReducers({
  router              : connectRouter(history),
  [theme.store]       : theme.reducer,
  [products.store]    : products.reducer,
  [settings.store]    : settings.reducer,
  [companies.store]   : companies.reducer,
  [contacts.store]    : contacts.reducer,
  [pageHome.store]    : pageHome.reducer,
  [banners.store]     : banners.reducer,
  [testimonials.store]: testimonials.reducer,
  [services.store]    : services.reducer
})

export function* rootSaga() {
  yield all([
    ...products.takes,
    ...settings.takes,
    ...companies.takes,
    ...contacts.takes,
    ...pageHome.takes,
    ...banners.takes,
    ...testimonials.takes,
    ...services.takes
  ])
}

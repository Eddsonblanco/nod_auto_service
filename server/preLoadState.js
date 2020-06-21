// import serviceDucks from 'reducers/main/services'
import userDucks from 'reducers/users'
// import settingsDucks from 'reducers/settings'

export default async function(req, res, next) {
  const { store } = res.locals

  // store.dispatch(settingsDucks.creators.getSettings())
  if(req.cookies) await store.dispatch(userDucks.creators.setCookies(req.cookies.accessToken))
  // console.log('===> XAVI <===: store', store.getState(name => console.log(name)))
  res.locals.store = store

  next()
}

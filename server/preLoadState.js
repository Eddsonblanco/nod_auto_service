// import serviceDucks from 'reducers/main/services'
import userDucks from 'reducers/users'

export default async function(req, res, next) {
  const { store } = res.locals

  if(req.cookies) await store.dispatch(userDucks.creators.setCookies(req.cookies.accessToken))
  res.locals.store = store

  next()
}

// import serviceDucks from 'reducers/main/services'
import userDucks from 'reducers/users'
import settingsDucks from 'reducers/settings'

export default async function(req, res, next) {
  const { store } = res.locals

  if(req.cookies) await store.dispatch(userDucks.creators.setCookies(req.cookies.accessToken))
  if(req.originalUrl === '/')
    await store.dispatch(settingsDucks.creators.getSettings())
  res.locals.store = store

  next()
}

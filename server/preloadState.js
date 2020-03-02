import themeDucks from 'reducers/theme'

export default async function(req, res, next) {
  const { store } = res.locals

  if(req.cookies)  {
    const { style } = req.cookies

    store.dispatch(themeDucks.creators.updateTheme(style))
  }

  // Resave new store
  res.locals.store = store

  // Pass middlerware
  next()
}

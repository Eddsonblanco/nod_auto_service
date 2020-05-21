// // import themeDucks from 'reducers/theme'
// import pageHomeDucks from 'reducers/pagehome'

// export default async function(req, res, next) {
//   const { store } = res.locals

//   // if(req.cookies)  {
//   //   const { style } = req.cookies

//   //   store.dispatch(themeDucks.creators.updateTheme(style))
//   // }

//   if(req.originalUrl === '/') {
//     await store.dispatch(pageHomeDucks.creators.getPageConfig())
//     console.log('===> XAVI <===: store', store)
//     console.log('===> XAVI <===: req.originalUrl', req.originalUrl)
//   }

//   // Resave new store
//   res.locals.store = store

//   // Pass middlerware
//   next()
// }

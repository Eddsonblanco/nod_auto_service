// import serviceDucks from 'reducers/main/services'

// export default async function(req, res, next) {
//   const { store } = res.locals

//   if(req.baseUrl.indexOf('/service/') === 0) {
//     const [ , , id ] = req.baseUrl.split('/')
//     console.log('===> XAVI <===: id', id)
//     await store.dispatch(serviceDucks.creators.getService(id))
//   //   console.log('===> XAVI <===: store', store)
//   //   console.log('===> XAVI <===: req.originalUrl', req.originalUrl)
//   }

//   // Resave new store
//   console.log('===> XAVI <===: store', store)
//   res.locals.store = store

//   // Pass middlerware
//   next()
// }

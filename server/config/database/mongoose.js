import mongoose from 'mongoose'

let connectMongoSpa

try {
  connectMongoSpa = mongoose.createConnection(process.env.MONGODB_URL, {
    useFindAndModify  : false,
    useNewUrlParser   : true,
    useUnifiedTopology: true
  })
} catch ({ err }) {
  console.log('Xavi: err', err)
}

export { connectMongoSpa }

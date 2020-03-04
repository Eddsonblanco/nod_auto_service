import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const serviceShema = new mongoose.Schema({
  image: {
    type: String
  },
  text: {
    type: String
  },
  title: {
    type: String
  }
})

const service = connectMongoSpa.model('Service', serviceShema)

export default service

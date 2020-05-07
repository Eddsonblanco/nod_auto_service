import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const serviceShema = new mongoose.Schema({
  desc: {
    type: String
  },
  icon: {
    type: String
  },
  image1: {
    type: String
  },
  image2: {
    type: String
  },
  title: {
    type: String
  }
})

const service = connectMongoSpa.model('Service', serviceShema)

export default service

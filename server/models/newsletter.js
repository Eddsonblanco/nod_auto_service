import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const newsletterShema = new mongoose.Schema({
  email: {
    required: true,
    type    : String
  }
})

const newsletter = connectMongoSpa.model('Newsletter',newsletterShema)

export default newsletter

import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const insuranceShema = new mongoose.Schema({
  alt_text: {
    type: String
  },
  image: {
    type: String
  }
})

const insurance = connectMongoSpa.model('Insurance', insuranceShema)

export default insurance

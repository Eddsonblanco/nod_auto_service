import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const companySchema = new mongoose.Schema({
  alt_text: {
    required: true,
    type    : String
  },
  image: {
    required: true,
    type    : String
  }
})

const company = connectMongoSpa.model('Company', companySchema)

export default company

import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const contactShema = new mongoose.Schema({
  contacted: {
    'default': false,
    type     : Boolean
  },
  email: {
    required: true,
    type    : String
  },
  message: {
    required: true,
    type    : String
  },
  name: {
    required: true,
    type    : String
  },
  phone: {
    required: true,
    type    : String
  },
  view: {
    'default': false,
    type     : Boolean
  }
}, { timestamps: true })

const contact = connectMongoSpa.model('Contact', contactShema)

export default contact

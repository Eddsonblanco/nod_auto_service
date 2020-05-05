import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const pageHomeShema = new mongoose.Schema({
  show_banner: {
    'default': false,
    type     : Boolean
  },
  show_brands: {
    'default': false,
    type     : Boolean
  },
  show_newsletter: {
    'default': false,
    type     : Boolean
  },
  show_services: {
    'default': false,
    type     : Boolean
  },
  show_testimonials: {
    'default': false,
    type     : Boolean
  }
}, { timestamps: true })

const pageHome = connectMongoSpa.model('Pagehome', pageHomeShema)

export default pageHome

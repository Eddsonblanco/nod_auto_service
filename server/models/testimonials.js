import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const testimonialsShema = new mongoose.Schema({
  author: {
    type: String
  },
  date: {
    type: String
  },
  desc: {
    type: String
  }
})

const testimonial = connectMongoSpa.model('Testimonial', testimonialsShema)

export default testimonial

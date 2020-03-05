import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const bannerShema = new mongoose.Schema({
  alt_text: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  text_link: {
    type: String
  },
  title: {
    type: String
  },
  video: {
    type: String
  }
})

const banner = connectMongoSpa.model('Banner', bannerShema)

export default banner

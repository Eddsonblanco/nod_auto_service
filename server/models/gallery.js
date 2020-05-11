import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const galleryShema = new mongoose.Schema({
  alt_text: {
    type: String
  },
  image: {
    type: String
  }
})

galleryShema.methods.setImgUrl = function setImgUrl(filename) {
  this.image = `/api/public/${filename}`
}

const gallery = connectMongoSpa.model('Gallery', galleryShema)

export default gallery

import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const bannerShema = new mongoose.Schema({
  alt_text: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: Boolean
  },
  sub_title: {
    type: String
  },
  text_link: {
    type: String
  },
  title: {
    type: String
  }
})

bannerShema.methods.setImgUrl = function setImgUrl(filename) {
  this.image = `/api/public/${filename}`
}

const banner = connectMongoSpa.model('Banner', bannerShema)

export default banner

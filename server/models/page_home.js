import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const pageHomeShema = new mongoose.Schema({
  message_desc: {
    type: String
  },
  message_icon: {
    type: String
  },
  message_image: {
    type: String
  },
  message_left: {
    type: String
  },
  message_link: {
    type: String
  },
  message_title: {
    type: String
  },
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

pageHomeShema.methods.setImgUrl = function setImgUrl(filename) {
  console.log('===> XAVI <===: setImgUrl -> filename', filename)
  this.message_icon = `/api/public/${filename}`
}

pageHomeShema.methods.setImgUrl2 = function setImgUrl(filename) {
  console.log('===> XAVI <===: setImgUrl -> filename', filename)
  this.message_image = `/api/public/${filename}`
}

const pageHome = connectMongoSpa.model('Pagehome', pageHomeShema)

export default pageHome

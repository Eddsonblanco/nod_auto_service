import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const serviceShema = new mongoose.Schema({
  content: {
    type: String
  },
  desc: {
    type: String
  },
  icon: {
    type: String
  },
  show_home: {
    'default': false,
    type     : Boolean
  },
  title: {
    type: String
  }
})

serviceShema.methods.setImgUrl = function setImgUrl(filename) {
  this.icon = `/api/public/${filename}`
}

const service = connectMongoSpa.model('Service', serviceShema)

export default service

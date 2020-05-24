import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const aboutShema = new mongoose.Schema({
  block1: {
    required: false,
    type    : String
  },
  block2: {
    required: false,
    type    : String
  },
  block3: {
    required: false,
    type    : String
  },
  image1: {
    required: false,
    type    : String
  },
  image2: {
    required: false,
    type    : String
  },
  paragraph_end: {
    required: false,
    type    : String
  },
  sub_title_end: {
    required: false,
    type    : String
  },
  title: {
    required: false,
    type    : String
  },
  title_end: {
    required: false,
    type    : String
  }
})

aboutShema.methods.setImgUrl = function setImgUrl(filename) {
  this.image1 = `/api/public/${filename}`
}

aboutShema.methods.setImgUrl2 = function setImgUrl(filename) {
  this.image2 = `/api/public/${filename}`
}

const about = connectMongoSpa.model('About', aboutShema)

export default about

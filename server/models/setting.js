import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const settingShema = new mongoose.Schema({
  copyright: {
    required: false,
    type    : String
  },
  direction: {
    required: false,
    type    : String
  },
  email: {
    required: false,
    type    : String
  },
  facebook: {
    required: false,
    type    : String
  },
  instagram: {
    required: false,
    type    : String
  },
  logo: {
    required: false,
    type    : String
  },
  logo_footer: {
    required: false,
    type    : String
  },
  phone: {
    required: false,
    type    : String
  },
  phone_extra: {
    required: false,
    type    : String
  },
  title: {
    required: true,
    type    : String
  },
  twitter: {
    required: false,
    type    : String
  }
})

settingShema.methods.setImgUrl = function setImgUrl(filename) {
  this.logo = `/api/public/${filename}`
}

settingShema.methods.setImgUrl2 = function setImgUrl(filename) {
  this.logo_footer = `/api/public/${filename}`
}

const setting = connectMongoSpa.model('Setting', settingShema)

export default setting

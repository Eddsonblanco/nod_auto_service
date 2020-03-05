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
  logo: {
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
  }
})

const setting = connectMongoSpa.model('Setting', settingShema)

export default setting

import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const userShema = new mongoose.Schema({
  email: {
    required: true,
    type    : String
  },
  first_name : String,
  last_name  : String,
  login_count: Number,
  password   : {
    required: true,
    type    : String
  },
  username: {
    required: true,
    type    : String
  }
})

const user = connectMongoSpa.model('User', userShema)

export default user

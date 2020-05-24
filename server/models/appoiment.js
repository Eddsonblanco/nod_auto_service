import mongoose from 'mongoose'
import { connectMongoSpa } from '../config/database/mongoose'

const appoimentShema = new mongoose.Schema({
  address: {
    type: String
  },
  city: {
    type: String
  },
  dateEnd: {
    type: String
  },
  dateEndTime: {
    type: String
  },
  dateStart: {
    type: String
  },
  dateStartTime: {
    type: String
  },
  description: {
    type: String
  },
  email: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
  },
  service: {
    type: String
  },
  state: {
    type: String
  },
  vehicleMileage: {
    type: String
  },
  vehicleModel: {
    type: String
  },
  vehicleYear: {
    type: String

  },
  zipCode: {
    type: String

  }
})

const appoiment = connectMongoSpa.model('Appoiment', appoimentShema)

export default appoiment

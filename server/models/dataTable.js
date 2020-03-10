import { connectMongoSpa } from '../config/database/mongoose'
import mongoose from 'mongoose'

const DataTableSchema = new mongoose.Schema({
  index: {
    'default': 0,
    type     : Number
  },
  key  : String,
  label: {
    'default': null,
    type     : String
  },
  ordering: {
    'default': false,
    type     : Boolean
  },
  source: {
    'default': null,
    type     : String
  },
  visible: {
    'default': true,
    type     : Boolean
  }
}, { timestamps: true })

export default connectMongoSpa.model('DataTable', DataTableSchema)

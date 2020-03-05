import { Types } from 'mongoose'
import { settings } from '../models'

const all = async () => {
  try {
    return await settings.find({}).limit(1)
  } catch (err) {
    return err
  }
}

const update = async (body) => {
  try {
    return await settings.findOneAndUpdate({ _id: Types.ObjectId(body.id) },
      { $set: body },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

export {
  all,
  update
}

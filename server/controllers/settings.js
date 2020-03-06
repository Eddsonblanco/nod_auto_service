import { Types } from 'mongoose'
import { settings } from '../models'
import { removeImage } from '../utils'

const all = async () => {
  try {
    return await settings.find({}).limit(1)
  } catch (err) {
    return err
  }
}

const update = async (req) => {
  try {
    const {
      id,
      ...others
    } = req.body

    const setting = settings(others)

    if(req.file) {
      const { logo } = await settings.findOne({ _id: Types.ObjectId(id) }).select('logo')
      removeImage(logo)
      setting.setImgUrl(req.file.filename)
    }

    delete setting._doc._id

    return await settings.findOneAndUpdate({ _id: Types.ObjectId(id) },
      { $set: setting },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

export {
  all,
  update
}

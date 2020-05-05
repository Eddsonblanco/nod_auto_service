import { Types } from 'mongoose'
import { settings } from '../models'
import { removeImage } from '../utils'

const all = async () => {
  try {
    return await settings.findOne({})
  } catch (err) {
    return err
  }
}

const update = async (req) => {
  try {
    const {
      _id,
      ...others
    } = req.body

    const setting = settings(others)

    if(req.file) {
      const { logo } = await settings.findOne({ _id: Types.ObjectId(_id) }).select('logo')
      if(logo)
        removeImage(logo)

      setting.setImgUrl(req.file.filename)
    }

    delete setting._doc._id

    return await settings.findOneAndUpdate({ _id: Types.ObjectId(_id) },
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

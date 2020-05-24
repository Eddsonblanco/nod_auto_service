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

    if(req.files.logo) {
      const { logo } = await settings.findOne({ _id: Types.ObjectId(_id) }).select('logo')
      if(logo)
        removeImage(logo)

      setting.setImgUrl(req.files.logo[0].filename)
    }

    if(req.files.logo_footer) {
      const { logo_footer } = await settings.findOne({ _id: Types.ObjectId(_id) }).select('logo_footer')
      if(logo_footer)
        removeImage(logo_footer)

      setting.setImgUrl2(req.files.logo_footer[0].filename)
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

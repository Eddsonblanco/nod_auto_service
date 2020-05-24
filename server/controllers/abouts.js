import { Types } from 'mongoose'
import { Abouts } from '../models'
import { removeImage } from '../utils'

const all = async () => {
  try {
    return await Abouts.findOne({})
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

    const about = Abouts(others)

    if(req.files.image1) {
      const { image1 } = await Abouts.findOne({ _id: Types.ObjectId(_id) }).select('image1')
      if(image1)
        removeImage(image1)

      about.setImgUrl(req.files.image1[0].filename)
    }

    if(req.files.image2) {
      const { image2 } = await Abouts.findOne({ _id: Types.ObjectId(_id) }).select('image2')
      if(image2)
        removeImage(image2)

      about.setImgUrl2(req.files.image2[0].filename)
    }

    delete about._doc._id

    const validId = _id !== 'null' ? { _id: Types.ObjectId(_id) } : {}

    return await Abouts.findOneAndUpdate(validId,
      { $set: about },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

export {
  all,
  update
}

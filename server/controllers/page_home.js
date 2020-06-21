import { Types } from 'mongoose'
import { PageHome } from '../models'
import { removeImage } from '../utils'

const get = async () => {
  return PageHome.findOne({})
}

const edit = async req => {
  try {
    const {
      _id,
      ...others
    } = req.body

    const page = PageHome(others)

    if(req.files.message_icon) {
      const { message_icon } = await PageHome.findOne({ _id: Types.ObjectId(_id) })
      if(message_icon)
        removeImage(message_icon)

      page.setImgUrl(req.files.message_icon[0].filename)
    }

    if(req.files.message_image) {
      const { message_image } = await PageHome.findOne({ _id: Types.ObjectId(_id) })
      if(message_image)
        removeImage(message_image)

      page.setImgUrl2(req.files.message_image[0].filename)
    }

    delete page._doc._id
    console.log('===> XAVI <===: page', page)

    return await PageHome.findOneAndUpdate({ _id: Types.ObjectId(_id) },
      { $set: page },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

export {
  edit,
  get
}

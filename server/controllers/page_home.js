import { Types } from 'mongoose'
import { PageHome } from '../models'

const get = async () => {
  return PageHome.findOne({})
}

const edit = async req => {
  try {
    const {
      id,
      ...others
    } = req.body

    const page = PageHome(others)
    delete page._doc._id

    return await PageHome.findOneAndUpdate({ _id: Types.ObjectId(id) },
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

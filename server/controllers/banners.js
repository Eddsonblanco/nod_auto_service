
import { Banners, Datatables } from '../models'
import { Types } from 'mongoose'
import { removeImage } from '../utils'

const create = async (req) => {
  try {
    const banner = Banners(req.body)

    if(req.file)
      banner.setImgUrl(req.file.filename)

    return await banner.save()
  } catch (err) {
    return err
  }
}

const allHome = async () => {
  try {
    return await Banners.find({})
  } catch (err) {
    return err
  }
}

const all = async (query) => {
  try {
    const {
      perPage = 10,
      page = 1,
      orderBy,
      sort
    } = query

    const sortNumber = sort === 'asc' ? 1 : -1

    const columns = await Datatables.find({ source: 'banners' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Banners.aggregate([
      {
        $facet: {
          count: [
            { $count: 'total' }
          ],
          data: [
            { $project: { __v: 0, createdAt: 0 } },
            { $sort: { [orderBy || 'updatedAt']: sortNumber } },
            { $skip: parseInt(page - 1) * parseInt(perPage) },
            { $limit: parseInt(perPage) }
          ]
        }
      }
    ])

    return {
      columns,
      pagination: {
        page   : parseInt(page),
        perPage: parseInt(perPage),
        total
      },
      rows
    }
  } catch (err) {
    return err
  }
}

const remove = async (id) => {
  try {
    const { image } = await Banners.findOne({ _id: Types.ObjectId(id) }).select('image')

    if(image)
      removeImage(image)

    const { deletedCount } = await Banners.deleteOne({ _id: Types.ObjectId(id) }).lean()

    return deletedCount
  } catch (err) {
    return err
  }
}

const edit = async (req) => {
  try {
    const {
      id,
      ...others
    } = req.body

    const banner = Banners(others)

    if(req.file) {
      const { image } = await Banners.findOne({ _id: Types.ObjectId(id) }).select('image')
      removeImage(image)
      banner.setImgUrl(req.file.filename)
    }

    delete banner._doc._id

    return await Banners.findOneAndUpdate({ _id: Types.ObjectId(id) },
      { $set: banner },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

const one = async (id) => {
  try {
    return await Banners.findOne({ _id: Types.ObjectId(id) })
  } catch (err) {
    return err
  }
}
export {
  create,
  all,
  allHome,
  remove,
  edit,
  one
}

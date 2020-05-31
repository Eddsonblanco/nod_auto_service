
import { Galleries } from '../models'
import { Types } from 'mongoose'
import { removeImage } from '../utils'

const create = async (req) => {
  try {
    const gallery = Galleries(req.body)

    if(req.file)
      gallery.setImgUrl(req.file.filename)

    return await gallery.save()
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

    // const columns = await Datatables.find({ source: 'galleries' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Galleries.aggregate([
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
      // columns,
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
    const { image } = await Galleries.findOne({ _id: Types.ObjectId(id) }).select('image')

    if(image)
      removeImage(image)

    const { deletedCount } = await Galleries.deleteOne({ _id: Types.ObjectId(id) }).lean()

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

    const gallery = Galleries(others)

    if(req.file) {
      const { image } = await Galleries.findOne({ _id: Types.ObjectId(id) }).select('image')
      removeImage(image)
      gallery.setImgUrl(req.file.filename)
    }

    delete gallery._doc._id

    return await Galleries.findOneAndUpdate({ _id: Types.ObjectId(id) },
      { $set: gallery },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

const one = async (id) => {
  try {
    return await Galleries.findOne({ _id: Types.ObjectId(id) })
  } catch (err) {
    return err
  }
}
export {
  create,
  all,
  remove,
  edit,
  one
}

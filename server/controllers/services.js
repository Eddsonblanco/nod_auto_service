
import { Services, Datatables } from '../models'
import { Types } from 'mongoose'
import { removeImage } from '../utils'

const create = async (req) => {
  try {
    const service = Services(req.body)

    if(req.file)
      service.setImgUrl(req.file.filename)

    return await service.save()
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

    const columns = await Datatables.find({ source: 'services' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Services.aggregate([
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

const allHome = async () => {
  try {
    return await Services.find({ show_home: true })
  } catch (err) {
    return err
  }
}

const remove = async (id) => {
  try {
    const { image1, image2 } = await Services.findOne({ _id: Types.ObjectId(id) }).lean()

    if(image1)
      removeImage(image1)

    if(image2)
      removeImage(image2)

    const { deletedCount } = await Services.deleteOne({ _id: Types.ObjectId(id) }).lean()

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

    const service = Services(others)

    if(req.file) {
      const { icon } = await Services.findOne({ _id: Types.ObjectId(id) })
      if(icon)
        removeImage(icon)

      service.setImgUrl(req.file.filename)
    }

    delete service._doc._id

    return await Services.findOneAndUpdate({ _id: Types.ObjectId(id) },
      { $set: service },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

const one = async (id) => {
  try {
    return await Services.findOne({ _id: Types.ObjectId(id) })
  } catch (err) {
    return err
  }
}

const oneUrl = async (url) => {
  try {
    return await Services.findOne({ url: url })
  } catch (err) {
    return err
  }
}
export {
  create,
  all,
  remove,
  edit,
  one,
  oneUrl,
  allHome
}

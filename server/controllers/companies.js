
import { Companies, Datatables } from '../models'
import { Types } from 'mongoose'
import { removeImage } from '../utils'

const create = async (req) => {
  try {
    const {
      alt_text
    } = req.body
    const company = Companies({
      alt_text
    })

    if(req.file)
      company.setImgUrl(req.file.filename)

    return await company.save()
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

    const columns = await Datatables.find({ source: 'companies' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Companies.aggregate([
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
    const { image } = await Companies.findOne({ _id: Types.ObjectId(id) }).select('image')

    if(image)
      removeImage(image)

    const { deletedCount } = await Companies.deleteOne({ _id: Types.ObjectId(id) }).lean()

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

    const company = Companies(others)

    if(req.file) {
      const { image } = await Companies.findOne({ _id: Types.ObjectId(id) }).select('image')
      removeImage(image)
      company.setImgUrl(req.file.filename)
    }

    delete company._doc._id

    return await Companies.findOneAndUpdate({ _id: Types.ObjectId(id) },
      { $set: company },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

const one = async (id) => {
  try {
    return await Companies.findOne({ _id: Types.ObjectId(id) })
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

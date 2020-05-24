
import { Newsletters, Datatables } from '../models'
import { Types } from 'mongoose'

const create = async (req) => {
  try {
    const emailExist = await Newsletters.findOne(req.body)
    if(emailExist)
      throw 'Email is Register'

    const newsletter = Newsletters(req.body)

    return await newsletter.save()
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

    const columns = await Datatables.find({ source: 'newsletters' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Newsletters.aggregate([
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
    const { deletedCount } = await Newsletters.deleteOne({ _id: Types.ObjectId(id) }).lean()

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

    const newsletter = Newsletters(others)

    delete newsletter._doc._id

    return await Newsletters.findOneAndUpdate({ _id: Types.ObjectId(id) },
      { $set: newsletter },
      { 'new': true, upsert: true })
  } catch (err) {
    return err
  }
}

const one = async (id) => {
  try {
    return await Newsletters.findOne({ _id: Types.ObjectId(id) })
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

import { Types } from 'mongoose'

import { Appoiments, Datatables } from '../models'

const all = async query => {
  try {
    const {
      perPage = 10,
      page = 1,
      orderBy,
      sort
    } = query

    const sortNumber = sort === 'asc' ? 1 : -1

    const columns = await Datatables.find({ source: 'appoiments' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Appoiments.aggregate([
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
        total  : Math.ceil(total / perPage)
      },
      rows
    }
  } catch (err) {
    return err
  }
}

const create = async data => {
  try {
    return await Appoiments.create(data.body)
  } catch (err) {
    return err
  }
}

const remove = async (id) => {
  try {
    const { deletedCount } = await Appoiments.deleteOne({ _id: Types.ObjectId(id) }).lean()

    return deletedCount
  } catch (err) {
    return err
  }
}

const one = async (id) => {
  try {
    const getFullDate = (date) => {
      const currentDate = new Date(date)

      return `
        ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}
      `
    }
    const getFullTime = (date) => {
      const currentDate = new Date(date)

      return `
        ${currentDate.getHours()}:${currentDate.getMinutes()}
      `
    }
    const response = await Appoiments.findOne({ _id: Types.ObjectId(id) }).lean()

    return await({
      ...response,
      dateEnd      : getFullDate(response.dateEnd),
      dateEndTime  : getFullTime(response.dateEndTime),
      dateStart    : getFullDate(response.dateStart),
      dateStartTime: getFullTime(response.dateStartTime)
    })
  } catch (err) {
    return err
  }
}

export {
  all,
  create,
  remove,
  one
}

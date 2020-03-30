import { Contact, Datatables } from '../models'

const all = async query => {
  try {
    const {
      perPage = 10,
      page = 1,
      orderBy,
      sort
    } = query

    const sortNumber = sort === 'asc' ? 1 : -1

    const columns = await Datatables.find({ source: 'contacts' }).sort({ index: 1 })

    const [ { count: [ { total } ], data: rows } ] = await Contact.aggregate([
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
    return await Contact.create(data)
  } catch (err) {
    return err
  }
}

export {
  all,
  create
}

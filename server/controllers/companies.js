
import { companies } from '../models'
import { Types } from 'mongoose'
// import { escapeRegex } from '../utils/regex'

const create = async (req) => {
  try {
    const {
      alt_text
    } = req.body
    const company = companies({
      alt_text
    })

    if(req.file)
      company.setImgUrl(req.file.filename)

    return await company.save()
  } catch (err) {
    return err
  }
}

const all = async () => {
  try {
    const companiesData = await companies.find({})

    return {
      items: companiesData
    }
  } catch (err) {
    return err
  }
}

const remove = async (id) => {
  try {
    return acompanies.deleteOne({ _id: Types.ObjectId(id) }).lean()
  } catch (err) {
    return err
  }
}

export {
  create,
  all,
  remove
}

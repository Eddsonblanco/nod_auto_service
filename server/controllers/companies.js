// import { uploadImageFolderName } from '../utils'
import { companies } from '../models'
// import { escapeRegex } from '../utils/regex'

const create = async (data) => {
  try {
    return await companies.create(data)
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

export {
  create,
  all
}

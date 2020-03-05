import { insurances } from '../models'

const create = async data => {
  try {
    return await insurances.create(data)
  } catch (err) {
    return err
  }
}

const all = async () => {
  try {
    const insuranceData = await insurances.find({})

    return {
      items: insuranceData
    }
  } catch (err) {
    return err
  }
}

export {
  create,
  all
}

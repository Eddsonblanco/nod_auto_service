import { services } from '../models'

const all = async () => {
  try {
    return await services.find({})
  } catch (err) {
    return err
  }
}

const create = async data => {
  try {
    return await services.create(data)
  } catch (err) {
    return err
  }
}

export {
  all,
  create
}

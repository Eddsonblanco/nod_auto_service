import { Contact } from '../models'

const all = async () => {

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

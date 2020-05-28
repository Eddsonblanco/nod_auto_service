import { Users } from '../models'
import passport from 'passport'
import jwt from 'jsonwebtoken'

const login = async data => {
  console.log('===> XAVI <===: data', data)
  try {
    passport.authenticate('local', { session: false }, (error, user) => {
      console.log('===> XAVI <===: error', error)
      console.log('===> XAVI <===: user', user)
      console.log('ejecutando *callback auth* de authenticate para estrategia local')
    })
  } catch (err) {
    console.log('===> XAVI <===: err', err)

    return err
  }
}

export {
  login
}

import express from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'

// import {
//   login
// } from '../../controllers/users'

const router = express.Router()

router.post('/', async (req, res) => {
  console.log('caso login')
  passport.authenticate('local', { session: false }, (error, user) => {
    console.log('ejecutando *callback auth* de authenticate para estrategia local')

    // si hubo un error en el callback verify relacionado con la consulta de datos de usuario
    if(error || !user) {
      res.status(404).send({ error: 'username or password not correct.', success: false })
    } else {
      console.log('*** comienza generacion token*****')
      const payload = {
        exp     : Date.now() + parseInt(process.env.JWT_LIFETIME),
        sub     : user._id,
        username: user.username
      }
      console.log('===> XAVI <===: payload', payload)

      /* solo inficamos el payload ya que el header ya lo crea la lib jsonwebtoken internamente
      para el calculo de la firma y así obtener el token*/
      console.log('===> XAVI <===: jwt', jwt)
      const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, { algorithm: process.env.JWT_ALGORITHM })
      res.json({ data: { token: token } })
    }
  })(req, res)
})

export default router

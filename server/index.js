import express from 'express'
import path from 'path'
import v1 from './v1'
import passport from './auth'
import auth from './middleware/auth'

const dir = path.resolve(__dirname, '../', 'storage/imgs')
const router = express.Router()

router.use(passport.initialize())

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

router.use('/public', express.static(dir))
router.use('/v1', v1)

router.use(auth.errorHandler)
router.use(auth.notFoundHandler)
export default router

import express from 'express'
import path from 'path'
import v1 from './v1'

const dir = path.resolve(__dirname, '../', 'storage/imgs')

const router = express.Router()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.use('/public', express.static(dir))
router.use('/v1', v1)

export default router

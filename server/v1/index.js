import express from 'express'
import products from './products'

const router = express.Router()

router.use('/products', products)

export default router

import express from 'express'
import products from './products'
import companies from './companies'

const router = express.Router()

router.use('/products', products)
router.use('/companies', companies)

export default router

import express from 'express'
import products from './products'
import companies from './companies'
import settings from './settings'

const router = express.Router()

router.use('/products', products)
router.use('/companies', companies)
router.use('/settings', settings)

export default router

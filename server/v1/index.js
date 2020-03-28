import express from 'express'
import products from './products'
import companies from './companies'
import settings from './settings'
import insurances from './insurances'
import services from './services'
import contact from './contact'

const router = express.Router()

router.use('/products', products)
router.use('/companies', companies)
router.use('/settings', settings)
router.use('/insurances', insurances)
router.use('/services', services)
router.use('/contact', contact)

export default router

import express from 'express'
import products from './products'
import companies from './companies'
import settings from './settings'
import insurances from './insurances'
import services from './services'
import contact from './contact'
import banners from './banners'
import testimonials from './testimonials'
import galleries from './galleries'
import appoiments from './appoiment'
import newsletters from './newsletter'
import abouts from './abouts'
import login from './login'
// ppages
import pageHome from './page_home'

const router = express.Router()

router.use('/products', products)
router.use('/companies', companies)
router.use('/settings', settings)
router.use('/insurances', insurances)
router.use('/services', services)
router.use('/contact', contact)
router.use('/banners', banners)
router.use('/testimonials', testimonials)
router.use('/galleries', galleries)
router.use('/appoiments', appoiments)
router.use('/newsletters', newsletters)
router.use('/abouts', abouts)
router.use('/login', login)
// pages
router.use('/page_home', pageHome)

export default router

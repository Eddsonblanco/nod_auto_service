import express from 'express'

import {
  all,
  create
} from '../../controllers/contact'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await all(req.body)
    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
})

router.post('/', async (req, res) => {
  try {
    const data = await create(req.body)
    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
})

export default router

import express from 'express'
import auth from '../../middleware/auth'

import {
  edit,
  get
} from '../../controllers/page_home'

const router = express.Router()

router.put('/', auth.ensureAuthenticated, async (req, res) => {
  try {
    const data = await edit(req)
    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await get(req.body)
    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
})

export default router

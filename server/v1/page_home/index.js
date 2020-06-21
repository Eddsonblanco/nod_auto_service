import express from 'express'
import auth from '../../middleware/auth'
import { upload } from '../../middleware/multer'

import {
  edit,
  get
} from '../../controllers/page_home'

const router = express.Router()

router.put('/', auth.ensureAuthenticated,
  upload.fields([ { maxCount: 1, name: 'message_icon' }, { maxCount: 1, name: 'message_image' } ]),
  async (req, res) => {
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

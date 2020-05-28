import express from 'express'
import auth from '../../middleware/auth'

import { upload } from '../../middleware/multer'

import {
  all,
  update
} from '../../controllers/settings'

const router = express.Router()

router.get('/', auth.ensureAuthenticated, async (req, res) =>  {
  try {
    const data = await all(req.query)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.put('/', upload.fields([ { maxCount: 1, name: 'logo' }, { maxCount: 1, name: 'logo_footer' } ]), async (req, res) => {
  try {
    const data = await update(req)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

export default router

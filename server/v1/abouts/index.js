import express from 'express'
import auth from '../../middleware/auth'

import { upload } from '../../middleware/multer'

import {
  all,
  update
} from '../../controllers/abouts'

const router = express.Router()

router.get('/', async (req, res) =>  {
  try {
    const data = await all(req.query)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.put('/', auth.ensureAuthenticated, upload.fields([ { maxCount: 1, name: 'image1' }, { maxCount: 1, name: 'image2' } ]), async (req, res) => {
  try {
    const data = await update(req)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

export default router

import express from 'express'
import { upload } from '../../middleware/multer'
import auth from '../../middleware/auth'

import {
  create,
  all,
  allHome,
  remove,
  edit,
  one
} from '../../controllers/banners'

const router = express.Router()

router.post('/', auth.ensureAuthenticated, upload.single('image'), async (req, res) => {
  try {
    // req.headers // token
    const data = await create(req)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.get('/home', async (req, res) => {
  try {
    const data = await allHome(req.query)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await all(req.query)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await one(id)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.delete('/:id', auth.ensureAuthenticated, async (req, res) => {
  try {
    const { id } = req.params

    const data = await remove(id)

    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.put('/', auth.ensureAuthenticated, upload.single('image'), async (req, res) => {
  try {
    // const { id } = req.params

    const data = await edit(req)
    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
})

export default router

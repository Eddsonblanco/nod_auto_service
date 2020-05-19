import express from 'express'
import { upload } from '../../middleware/multer'

import {
  create,
  all,
  remove,
  edit,
  one,
  oneUrl,
  allHome
} from '../../controllers/services'

const router = express.Router()

router.post('/',
  upload.single('icon'), async (req, res) => {
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

router.get('/main/:url', async (req, res) => {
  try {
    const { url } = req.params
    const data = await oneUrl(url)
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const data = await remove(id)

    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.put('/', upload.single('icon'), async (req, res) => {
  try {
    // const { id } = req.params

    const data = await edit(req)
    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).json({ error: err.message, success: false })
  }
})

export default router

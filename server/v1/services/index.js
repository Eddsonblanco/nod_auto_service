import express from 'express'
import {
  all,
  create
} from '../../controllers/services'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await all(req.body)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.post('/', async (req, res) => {
  try {
    const data = await create(req.body)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

export default router

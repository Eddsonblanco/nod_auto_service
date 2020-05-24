import express from 'express'

import {
  create,
  all,
  remove,
  one
} from '../../controllers/appoiments'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    // req.headers // token
    const data = await create(req)
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const data = await remove(id)

    res.status(200).json({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

export default router

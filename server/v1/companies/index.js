import express from 'express'

import {
  // create,
  all
} from '../../controllers/companies'

const router = express.Router()

// router.post('/', async (req, res) => {
//   try {
//     const data = await create(req.body)
//     res.status(200).send({ data, success: true })
//   } catch (err) {
//     res.status(500).send({ error: err.message, success: false })
//   }
// })

router.get('/', async (req, res) => {
  try {
    const data = await all(req.query)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

export default router

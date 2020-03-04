import express from 'express'

import {
  all,
  update
} from '../../controllers/settings'

const router = express.Router()

router.get('/', async (req, res) =>  {
  try {
    const data = await all(req.query)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

router.put('/', async (req, res) => {
//   console.log('===> XAVI <===: req', req.body)
  //   console.log('===> XAVI <===: req', req.headers)
  //   console.log('===> XAVI <===: req', req.params)
  //   console.log('===> XAVI <===: req', req.query)
  //   console.log('===> XAVI <===: res', res)
  try {
    const data = await update(req.body)
    console.log('===> XAVI <===: data', data)
    res.status(200).send({ data, success: true })
  } catch (err) {
    res.status(500).send({ error: err.message, success: false })
  }
})

export default router

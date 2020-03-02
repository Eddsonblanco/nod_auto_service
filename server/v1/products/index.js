import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    items: [
      {
        id  : 1,
        name: 'zapatillas nike'
      },
      {
        id  : 2,
        name: 'polo adidas'
      },
      {
        id  : 3,
        name: 'camisa'
      }
    ],
    success: true
  })
})

export default router

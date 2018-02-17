const express = require('express')
const router = express.Router()

const createApplication = require('./dbQueries/createApplication')

router.post('/', (req, res, next) => {
  createApplication(req.body)
    .then((result) => {
      console.log(result)
      res.status(200).json(result)
      next()
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json(error)
      next()
    })
})

module.exports = router
const express = require('express')
const router = express.Router()

const getUserDetailsByUserId = require('./dbQueries/getUserDetailsByUserId')

router.get('/:userId', (req, res, next) => {
  getUserDetailsByUserId(req.params.userId)
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
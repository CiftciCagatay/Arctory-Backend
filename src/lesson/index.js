const express = require('express')
const router = express.Router()

const getLessons = require('./dbQueries/getLessons')

router.get('/', (req, res, next) => {
  const maxFee = JSON.parse(req.query.maxFee)
  
  getLessons(req.query.searchString, maxFee, req.query.meetingPoint)
    .then((result) => {
      console.log(result)
      res.status(200).json({ result })
      next()
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error })
      next()
    })
})

module.exports = router
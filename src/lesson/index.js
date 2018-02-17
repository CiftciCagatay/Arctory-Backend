const express = require('express')
const router = express.Router()

const getLessons = require('./dbQueries/getLessons')

const parseJSON = (json) => {
  let parsed

  try {
    parsed = JSON.parse(json)
  } catch (error) {
    console.log(error)
  }

  return parsed
}

router.get('/', (req, res, next) => {
  let prefs = {
    maxFee: parseJSON(req.query.maxFee) || 0,
    gender: req.query.gender || ['Male', 'Female'],
    studentLocation: parseJSON(req.query.studentLocation) || [0, 0],
    maxDistance: parseJSON(req.query.maxDistance) || 0,
    meetingPoints: parseJSON(req.query.meetingPoints) || ['student', 'teacher'],
    language: parseJSON(req.query.language) || 'tr'
  }

  console.log(prefs)

  getLessons(req.query.searchString, prefs)
    .then((result) => {
      result = result.filter(doc => {
        return doc.teacher
      })

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
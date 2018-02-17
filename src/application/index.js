const express = require('express')
const router = express.Router()

const getApplicationsByUserId = require('./dbQueries/getApplicationsByUserId')
const createApplication = require('./dbQueries/createApplication')
const deleteApplication = require('./dbQueries/deleteApplication')

const addStudentToLesson = require('../lesson/dbQueries/addStudentToLesson')

router.get('/', (req, res, next) => {
  getApplicationsByUserId(req.query.userId)
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

router.put('/:applicationId', (req, res, next) => {
  addStudentToLesson(req.body.lessonId, req.body.studentId)
    .then(() => deleteApplication(req.params.applicationId))
    .then(() => {
      res.status(200).json()
      next()
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error })
    })
})

router.delete('/:applicationId', (req, res, next) => {
  deleteApplication(req.params.applicationId)
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
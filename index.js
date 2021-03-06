const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

const lessonController = require('./src/lesson/index')
const userController = require('./src/user/index')
const applicationController = require('./src/application/index')

const app = express()

app.use(bodyParser.json())
app.set('port', process.env.PORT || 5000)

// Database connection
app.use('/', (req, res, next) => {
  db.connectToMongo()
    .then(next())
    .catch((error) => res.status(500).json({ error }))
})

// Routers
app.use('/lessons', lessonController)
app.use('/users', userController)
app.use('/applications', applicationController)

// Database disconnection
app.use('/', db.disconnectFromMongo)

app.listen(app.get('port'), () => console.log(`App is listening port ${app.get('port')}...`))
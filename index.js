const express = require('express')
const bodyParser = require('body-parser')

const lessonController = require('./src/lesson/index')

const app = express()

app.use(bodyParser.json())
app.set('port', process.env.PORT || 5000)

app.use('/lessons', lessonController)

app.listen(app.get('port'), () => console.log(`App is listening port ${app.get('port')}...`))
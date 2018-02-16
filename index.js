const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => console.log(`App is listening port ${app.get('port')}...`))
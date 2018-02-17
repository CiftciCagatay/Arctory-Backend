const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')

const connectToMongo = () => {
  return mongoose.connect(MONGO_URI)
}

const disconnectFromMongo = () => {
  return mongoose.disconnect()
}

module.exports = Object.assign({}, { connectToMongo, disconnectFromMongo })
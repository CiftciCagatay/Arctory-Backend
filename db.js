const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')

var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

const connectToMongo = () => {
  return mongoose.connect(MONGO_URI, options)
}

const disconnectFromMongo = () => {
  return mongoose.disconnect()
}

module.exports = Object.assign({}, { connectToMongo, disconnectFromMongo })
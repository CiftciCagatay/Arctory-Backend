const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicationSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  lesson: {
    type: Schema.Types.ObjectId,
    ref: 'lessons'
  },

  date: Date,
  message: String
})

const Application = mongoose.model('application', ApplicationSchema)

module.exports = Application
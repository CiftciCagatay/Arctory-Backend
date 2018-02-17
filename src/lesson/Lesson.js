const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LessonSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  fee: {
    type: Number,
    required: true,
    min: 0
  },

  meetingPoint: {
    type: String,
    default: 'doesntMatter'
  }
})

const Lesson = mongoose.model('Lesson', LessonSchema)

module.exports = Lesson
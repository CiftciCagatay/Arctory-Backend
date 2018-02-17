const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LessonSchema = new Schema({
  teacher: {
    type: Schema.Types.ObjectId,
    path: 'Users'
  },

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
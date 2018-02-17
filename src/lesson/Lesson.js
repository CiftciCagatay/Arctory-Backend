const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LessonSchema = new Schema({
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'users'
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

const Lesson = mongoose.model('lesson', LessonSchema)

module.exports = Lesson
const Lesson = require('../../lesson/Lesson')
const User = require('../User')

module.exports = (userId) => {
  return Lesson
          .find({ students: { $all: [userId] } }, { teacher: 1, name: 1 })
          .populate('teacher', { _id: 1, name: 1 }, User)
}
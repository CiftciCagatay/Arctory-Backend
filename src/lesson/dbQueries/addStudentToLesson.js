const Lesson = require('../Lesson')
const User = require('../../user/User')

module.exports = (lessonId, studentId) => {
  return Lesson.update({ _id: lessonId }, { $push: { students: studentId } })
}
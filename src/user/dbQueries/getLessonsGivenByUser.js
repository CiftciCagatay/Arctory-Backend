const Lesson = require('../../lesson/Lesson')

module.exports = (userId) => {
  return Lesson.find({ teacher: userId }, { name: 1 })
}
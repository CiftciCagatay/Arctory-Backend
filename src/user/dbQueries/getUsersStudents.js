const Lesson = require('../../lesson/Lesson')
const User = require('../User')

module.exports = (userId) => {
  return Lesson
          .find({ teacher: userId }, { name: 1, students: 1 })
          .populate('students', { _id: 1, name: 1 }, User)
}
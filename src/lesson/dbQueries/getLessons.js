const Lesson = require('../Lesson')
const User = require('../../user/User')

module.exports = (searchString, maxFee, meetingPoint) => {
  return Lesson
    .find({
      name: { $regex: RegExp(searchString), $options: 'i' },
      fee: { $lt: maxFee },
      meetingPoint: meetingPoint
    })
    .populate('teacher', User)
}
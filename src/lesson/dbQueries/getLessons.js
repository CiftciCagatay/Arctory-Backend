const Lesson = require('../Lesson')

module.exports = (searchString, maxFee, meetingPoint) => {
  console.log(searchString)

  console.log(`/${searchString}/`)

  return Lesson.find({
    name: { $regex: RegExp(searchString), $options: 'i' },
    fee: { $lt: maxFee },
    meetingPoint: meetingPoint
  })
}
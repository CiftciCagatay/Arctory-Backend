const Lesson = require('../Lesson')
const User = require('../../user/User')

module.exports = (searchString, prefs) => {
  return Lesson
          .find({
            name: { $regex: RegExp(searchString), $options: 'i' },
            fee: { $lte: prefs.maxFee },
            meetingPoints: { $in: prefs.meetingPoints }
          })
          .populate('teacher', null, User, {
            gender: { $in: prefs.gender },
            languages: { $all: [prefs.language] },

            location: {
              $near: prefs.studentLocation,
              $maxDistance: prefs.maxDistance / 0.11112
            }
          })
}
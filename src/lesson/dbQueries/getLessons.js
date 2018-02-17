const Lesson = require('../Lesson')
const User = require('../../user/User')

module.exports = (searchString, prefs) => {
  return Lesson
          .find({
            name: { $regex: RegExp(searchString), $options: 'i' },
            fee: { $lte: prefs.maxFee },
            meetingPoints: { $in: prefs.meetingPoints }
          })
          .populate('teacher', { _id: 1, name: 1, location: 1 }, User, {
            gender: { $in: prefs.gender },
            languages: { $all: [prefs.language] },

            location: {
              $nearSphere: prefs.studentLocation,
              $maxDistance: prefs.maxDistance / 6371000
            }
          })
}
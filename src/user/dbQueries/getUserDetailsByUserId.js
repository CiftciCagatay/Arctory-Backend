const User = require('../User')

module.exports = (userId) => {
  return User.findOne({ _id: userId })
}
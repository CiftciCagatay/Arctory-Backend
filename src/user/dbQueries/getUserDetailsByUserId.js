const User = require('../User')

module.exports = (userId) => {
  return User.find({ _id: userId })
}
const Application = require('../Application')

module.exports = (userId) => {
  return Application.find({
    $or: [
      { student: userId }, 
      { teacher: userId }
    ]
  })
}
const Application = require('../Application')

module.exports = (id) => {
  return Application.remove({ _id: id })
}
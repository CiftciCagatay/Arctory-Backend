const Application = require('../Application')

module.exports = (props) => {
  const application = new Application(props)

  return application.save()
}
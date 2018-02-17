const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: String,
  phone: String,
  about: String,
  birthday: Date,

  languages: [String],

  experiences: [{
    name: String,
    startDate: Date,
    finishDate: Date
  }],

  education: [{
    name: String,
    startDate: Date,
    finishDate: Date
  }],

  lessonsGiven: [{
    type: Schema.Types.ObjectId,
    path: 'Lessons'
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User
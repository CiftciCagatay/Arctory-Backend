const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  
  photoUrl: String,
  email: String,
  phone: String,
  about: String,

  languages: [String],

  location: {
    type: [Number],
    index: '2d',
    required: true
  },

  experiences: [{
    name: String,
    startDate: Date,
    finishDate: Date,
    photoUrl: String
  }],

  education: [{
    name: String,
    startDate: Date,
    finishDate: Date,
    photoUrl: String
  }]
})

const User = mongoose.model('user', UserSchema, 'users')

module.exports = User
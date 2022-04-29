var mongoose = require('mongoose')

const UserSchema  = new mongoose.Schema({
    email: {
        type: String,
        unique: true
      },
    name: {
        type: String
      },
    surname: {
        type: String
      },
    password: {
        type: String
      },
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
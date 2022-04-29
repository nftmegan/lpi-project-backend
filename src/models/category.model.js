var mongoose = require('mongoose')

const CategorySchema  = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    url: {
      type: String,
      unique: true
  },
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category;
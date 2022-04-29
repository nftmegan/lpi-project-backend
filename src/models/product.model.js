var mongoose = require('mongoose')

const ProductSchema  = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    url: {
      type: String,
      unique: true
    },
    category: [
        { 
          "type": mongoose.Schema.Types.ObjectId,
          "ref": "Category"
    }]
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;
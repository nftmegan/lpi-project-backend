var mongoose = require('mongoose')

const ProductSchema  = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        url: {
            type: String,
            unique: true
        },
        description: {
            type: String,
        },
        photo_path: {
            type: String,
        },
        price: {
            type: Number,
            get: v => (v/100).toFixed(2),
            set: v => v*100
        },
        category: { 
            type: mongoose.Schema.Types.ObjectId,
            default: null,
            ref: 'Category'
        },
    },
    { 
        toJSON: { getters: true } //this right here
    }
);

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;
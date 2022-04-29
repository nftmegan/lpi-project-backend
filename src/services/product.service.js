let Product = require('../models/product.model');

exports.create = async (params) => {
    const newProduct = new Product(params);
    newProduct.url = newProduct.name.replace(/\s/g, '-').toLowerCase();
    console.log(newProduct.url)

    let errors = [];

    try {
        await newProduct.save();
        console.log("Sucessfully added a product to the database.")
    }
    catch (e) {
        if (e && e.code === 11000) {
            errors.push({ msg: 'Product already exists' })
            throw errors;
        }
    }
};

exports.findAll = async () => {
    return await Product.find({});
};

exports.findOne = async (params) => {
    return await Product.findById(params.id);
};
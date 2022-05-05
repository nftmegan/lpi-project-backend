let Product = require('../models/product.model');
var fs = require('fs');

exports.create = async (params) => {
    const newProduct = new Product(params);
    newProduct.url = newProduct.name.replace(/\s/g, '-').toLowerCase();

    console.log(params);

    let errors = [];

    try {
        await newProduct.save();
        console.log("Sucessfully added a product to the database.")
    }
    catch (e) {
        if (e) {
            if(e.code === 11000)
                errors.push({ msg: 'Product already exists' })

            errors.push({ msg: e.code })

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

exports.delete = async (params) => {
    return await Product.deleteOne({ _id: params.id });
};
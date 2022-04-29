let Category = require('../models/category.model');

exports.create = async (content) => {
    const newCategory = new Category(content);
    newCategory.url = newCategory.name.replace(/\s/g, '-').toLowerCase();
    console.log(newCategory.url)

    let errors = [];

    try {
        await newCategory.save();
        console.log("Sucessfully added a category to the database.")
    }
    catch (e) {
        if (e && e.code === 11000) {
            errors.push({ msg: 'Category already exists' })
            throw errors;
        }
    }
};

exports.findAll = async () => {
    return await Category.find({});
};
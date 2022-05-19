let Category = require('../models/category.model');

exports.create = async (content) => {
    const newCategory = new Category(content);
    newCategory.url = newCategory.name.replace(/\s/g, '-').toLowerCase();
    newCategory.parent = content.parent == "" ? null : content.parent
    console.log(newCategory)

    let errors = [];

    try {
        await newCategory.save();
        console.log("Sucessfully added a category to the database.")
    }
    catch (e) {
        if (e) {
            if(e.code === 11000)
                errors.push({ msg: 'Category already exists' })

            errors.push({ msg: e.code })

            console.log(e);

            throw errors;
        }
    }
};

exports.findAll = async () => {
    try {
        return await Category.find({}).populate('parent');
    }
    catch(error) {
        console.log("eRRO")
        console.log(error)
    }
};

exports.findOne = async (params) => {
    return await Category.findById(params.id);
};

exports.delete = async (params) => {
    return await Category.deleteOne({ _id: params.id });
};
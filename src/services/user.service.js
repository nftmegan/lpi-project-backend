let User = require('../models/user.model');

exports.findAll = async (query, page, limit) => {
    try {
        var users = await User.find(query)
        return users;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
};

exports.findOne = async (params) => {
    return await User.findById(params.id);
};

exports.update = async (id, data) => {
    console.log(User.findById(id));
    try {
        await User.findByIdAndUpdate(id, {"about_me": data.about_me});
    } catch (e) {
        if (e) {
            console.log(e);
            errors.push({ msg: e })
            throw errors;
        }
    }
};
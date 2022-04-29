let User = require('../models/user.model');
  
exports.signup = async (content) => {
    const newUser = new User(content);

    let errors = [];

    try {
        await newUser.save();
        console.log("Sucessfully added a user to the database.")
    }
    catch (e) {
        if (e && e.code === 11000) {
            errors.push({ msg: 'User already exists' })
            throw errors;
        }
    }
};
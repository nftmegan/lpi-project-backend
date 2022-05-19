let Address = require('../models/address.model');
var fs = require('fs');

var jwt = require("jsonwebtoken");

exports.create = async (params) => {
    const newAddress = new Address(params);

    let errors = [];

    const decoded = jwt.verify(params.token, "bezkoder-secret-key");
    if(decoded) {
        newAddress.user = decoded.id;
        console.log(decoded);
    }
    else {
        errors.push({ msg: 'Invalid JWT' })
        throw errors;
    }

    try {
        await newAddress.save();
        console.log("Sucessfully added an Address to the database.")
    }
    catch (e) {
        if (e) {
            if(e.code === 11000)
                errors.push({ msg: 'Address already exists' })

            errors.push({ msg: e.code })

            console.log(e);

            throw errors;
        }
    }
};

exports.findAll = async () => {
    return await Address.find({});
};

exports.findByUserId = async () => {
    return await Address.find({});
};

exports.findOne = async (params) => {
    return await Address.findById(params.id);
};

exports.delete = async (params) => {
    return await Address.deleteOne({ _id: params.id });
};
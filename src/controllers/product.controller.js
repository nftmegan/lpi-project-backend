const product_service = require('../services/product.service');

exports.create = async(req, res, next) => {
    var params = req.body;

    if (!req.file) {
        console.log("No file upload");
    } else {
        params.photo_path = req.file.filename;
    }

    try {
        await product_service.create(params);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.findAll = async(req, res, next) => {
    const query = req.query;

    try {
        const data = await product_service.findAll(query);

        res.status(200).send(data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.findOne = async(req, res, next) => {
    const params = req.params;

    try {
        const data = await product_service.findOne(params.id);
        res.status(200).send(data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.delete = async(req, res, next) => {
    const params = req.params;
    
    try {
        const data = await product_service.delete(params);
        res.status(200).send(data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.deleteAll = async(req, res, next) => {
    try {
        const data = await product_service.deleteAll();
        res.status(200).send(data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};
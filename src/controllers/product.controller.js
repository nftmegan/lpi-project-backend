const product_service = require('../services/product.service');

exports.create = async(req, res, next) => {
    const params = req.body;

    try {
        await product_service.create(params);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.findAll = async(req, res, next) => {
    try {
        const data = await product_service.findAll();
        setTimeout((() => {
            res.status(200).send(data);
            next();
        }), 200)
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.findOne = async(req, res, next) => {
    const id = req.params;
    console.log(id);
    try {
        const data = await product_service.findOne(id);
        setTimeout((() => {
            res.status(200).send(data);
            next();
        }), 200)
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};
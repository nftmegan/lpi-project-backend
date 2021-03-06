const category_service = require('../services/category.service');

exports.create = async(req, res, next) => {
    const data = req.body;
    console.log(req.file);
    try {
        await category_service.create(data);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.findAll = async(req, res, next) => {
    try {
        const data = await category_service.findAll();
        setTimeout((() => {
            res.status(200).send(data);
            next();
        }), 0)
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.findOne = async(req, res, next) => {
    const id = req.params;
    console.log(id);
    try {
        const data = await category_service.findOne(id);
        setTimeout((() => {
            res.status(200).send(data);
            next();
        }), 0)
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.delete = async(req, res, next) => {
    const params = req.params;
    
    try {
        const data = await category_service.delete(params);
        res.status(200).send(data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};
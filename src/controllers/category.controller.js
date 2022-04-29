const category_service = require('../services/category.service');

exports.create = async(req, res, next) => {
    const data = req.body;

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
        }), 100)
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
};
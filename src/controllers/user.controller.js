const user_service = require('../services/user.service');

exports.findOne = async(req, res, next) => {
    const params = req.params;
    
    try {
        const data = await user_service.findOne(params);
        res.status(200).send(data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.findAll = async(req, res, next) => {
    const {user, content} = req.body
    try {
        const data = await user_service.findAll(user, content);
        res.status(200).send(data);
        next();
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
};

exports.create = async(req, res, next) => {
    const data = req.body;

    try {
        await user_service.create(data);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.update = async(req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    console.log(id);
    console.log(data);

    try {
        await user_service.update(id, data);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};
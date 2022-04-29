const user_service = require('../services/user.service');

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
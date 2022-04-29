const auth_service = require('../services/auth.service');

exports.login = async(req, res, next) => {
    const data = req.body;
    res.status(200).send({ status: 'OK'});
    next();
};

exports.signup = async(req, res, next) => {
    const data = req.body;

    try {
        await auth_service.signup(data);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};
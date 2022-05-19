const user_service = require('../services/user.service');
const cart_service = require('../services/cart.service');

exports.findById = async(req, res, next) => {
    const data = req.params;

    try {
        const res_data = await user_service.findById(data.userId);
        res.status(200).send(res_data);
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(500) && next(error);
    }
};

exports.findAll = async(req, res, next) => {
    const {user, content} = req.body;
    
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

    try {
        await user_service.update(id, data);
        res.status(200).send({ status: 'OK'});
        next();
    } catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.getUserCart = async(req, res, next) => {
    const data = req.params;
    const tokenPayload = req.tokenPayload;

    data.userId = tokenPayload.id;

    try {
        
        const res_data = await cart_service.findByUserId(data.userId);
        res.status(200).send(res_data);
    }
    catch(errors) {
        return res.status(400).json({ errors: errors });
    }
}

exports.addProductToCart = async(req, res, next) => {
    var data = req.body;
    const tokenPayload = req.tokenPayload;

    data.userId = tokenPayload.id;

    try {
        await cart_service.addProductToCart(data);
        res.status(200).send({ status: 'OK'});
        next();
    }
    catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.updateEntryOnCart = async(req, res, next) => {
    const params = req.params;
    const body = req.body;

    const data = { ...params, ...body }

    const tokenPayload = req.tokenPayload;

    if(data.userId != tokenPayload.id)
        return res.status(400).json({ errors: [{msg: 'Not owner'}] });

    try {
        await cart_service.updateEntryOnCart(data);
        res.status(200).send({ status: 'OK'});
        next();
    }
    catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.removeEntryFromCart = async(req, res, next) => {
    const data = req.params;
    
    const tokenPayload = req.tokenPayload;

    if(data.userId != tokenPayload.id)
        return res.status(400).json({ errors: [{msg: 'Not owner'}] });

    try {
        await cart_service.removeEntryFromCart(data);
        res.status(200).send({ status: 'OK'});
        next();
    }
    catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};

exports.removeAllFromCart = async(req, res, next) => {
    const data = req.params;
    
    const tokenPayload = req.tokenPayload;

    if(data.userId != tokenPayload.id)
        return res.status(400).json({ errors: [{msg: 'Not owner'}] });

    try {
        await cart_service.deleteCartByUserId(data.userId);
        res.status(200).send({ status: 'OK'});
        next();
    }
    catch(errors) {
        return res.status(400).json({ errors: errors });
    }
};
let cart_service = require('../services/cart.service');

var jwt = require("jsonwebtoken");

const { validateToken } = require('../utils/jwt');

exports.owner = [
    async (req, res, next) => {
        let errors = [];

        const id = req.params;

        var foundCart = await cart_service.findOne({"id": id});

        var userId;
        try {
            userId = validateToken(req.headers.authorization);
        }
        catch(errors) {
            return res.status(400).json({ errors: errors });
        }

        if(foundCart.user != userId) {
            errors.push({ msg: 'Not owner' })
            return res.status(400).json({ errors: errors });
        }
  
        next();
    }
]
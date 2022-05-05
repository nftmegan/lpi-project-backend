let user_service = require('../services/user.service');

var jwt = require("jsonwebtoken");

exports.admin = [
    async (req, res, next) => {
        roleCheck(2, req, res, next)
    }
]

exports.mod = [
    async (req, res, next) => {
        roleCheck(1, req, res, next)
    }
]

exports.user = [
    async (req, res, next) => {
        roleCheck(0, req, res, next)
    }
]

const roleCheck = async (roleNeeded, req, res, next) => {
    let errors = [];
    
    if(!req.headers.authorization) {
        errors.push({ msg: 'No bearer' })
        return res.status(400).json({ errors: errors });
    }
    
    const authorization = (req.headers.authorization).split(' ');
    if (authorization[0] !== 'Bearer') {
        errors.push({ msg: 'No bearer' })
        return res.status(400).json({ errors: errors });
    }

    var decoded;
    
    try {
        decoded = jwt.verify(authorization[1], "bezkoder-secret-key");
    }
    catch(e) {
        errors.push({ msg: 'No auth' })
        return res.status(400).json({ errors: errors });
    }
    
    var foundUser = await user_service.findOne({"id": decoded.id})

    if(!foundUser) {
        errors.push({ msg: 'User doesnt exist' })
        
        return res.status(400).json({ errors: errors });
    }

    if(foundUser.role < roleNeeded) {
        errors.push({ msg: 'No permission' })
        
        return res.status(400).json({ errors: errors });
    }

    next();
}
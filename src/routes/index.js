const router = require("express").Router();

//Define our routers here
router.get('/', (req, res) => {
    res.send("Nothing to do here :)");
});
router.use('/auth', require("./auth.route"));
router.use('/user', require("./user.route"));
router.use('/category', require("./category.route"));
router.use('/product', require("./product.route"));

module.exports = router;
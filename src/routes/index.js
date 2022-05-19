const router = require("express").Router();

const path = require("path");

//Define our routers here
router.get('/', (req, res) => {
    res.send("Nothing to do here :)");
});

router.use('/auth', require("./auth.route"));
router.use('/user', require("./user.route"));
router.use('/category', require("./category.route"));
router.use('/product', require("./product.route"));
router.use('/address', require("./address.route"));
router.use('/order', require("./order.route"));
router.use('/cart', require("./cart.route"));

router.get('/uploads/:id', (req, res) => {
    let indexPath = path.join(__dirname, `../uploads/${req.params.id}`);
    res.sendFile(indexPath);
});

module.exports = router;
const router = require("express").Router();

const product_controller = require("../controllers/product.controller");
const product_validation = require("../validation/product.validation");

//const product_validation = require('../validation/auth.validation.js');

router.post("/", product_validation.create, product_controller.create);
router.get("/", product_controller.findAll);
router.get("/:id", product_controller.findOne);

/*
router.get("/:id", posts.findOne);
router.put("/:id", posts.update);
router.delete("/:id", posts.delete);
router.delete("/", posts.deleteAll);
*/

module.exports = router;
const router = require("express").Router();

const category_controller = require("../controllers/category.controller");
const category_validation = require("../validation/category.validation");

//const category_validation = require('../validation/auth.validation.js');

router.post("/", category_validation.create, category_controller.create);
router.get("/", category_controller.findAll);

/*
router.get("/:id", posts.findOne);
router.put("/:id", posts.update);
router.delete("/:id", posts.delete);
router.delete("/", posts.deleteAll);
*/

module.exports = router;
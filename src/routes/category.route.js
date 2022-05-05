const router = require("express").Router();

const category_controller = require("../controllers/category.controller");
const category_validation = require("../validation/category.validation");

const role_middleware = require("../middlewares/role.middleware");

//const category_validation = require('../validation/auth.validation.js');

router.post("/", role_middleware.mod, category_validation.create, category_controller.create);
router.get("/", category_controller.findAll);
router.get("/:id", category_controller.findOne);
router.delete("/:id", role_middleware.mod, category_controller.delete);

/*
router.get("/:id", posts.findOne);
router.put("/:id", posts.update);
router.delete("/:id", posts.delete);
router.delete("/", posts.deleteAll);
*/

module.exports = router;
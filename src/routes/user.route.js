const router = require("express").Router();

const user_controller = require("../controllers/user.controller.js");

const user_validation = require('../validation/auth.validation.js');


router.get("/", user_controller.findAll);

/*
router.get("/:id", posts.findOne);
router.put("/:id", posts.update);
router.delete("/:id", posts.delete);
router.delete("/", posts.deleteAll);
*/

module.exports = router;
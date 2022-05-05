const router = require("express").Router();

const user_controller = require("../controllers/user.controller.js");

const user_validation = require('../validation/auth.validation.js');

const role_middleware = require("../middlewares/role.middleware");

const multer  = require('multer')
var path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})
var upload = multer({ storage: storage });

router.get("/", role_middleware.user, user_controller.findAll);
router.get("/:id", role_middleware.user, user_controller.findOne);
router.put("/:id", role_middleware.user, upload.single('photo'), user_controller.update);

/*

router.put("/:id", posts.update);
router.delete("/:id", posts.delete);
router.delete("/", posts.deleteAll);
*/

module.exports = router;
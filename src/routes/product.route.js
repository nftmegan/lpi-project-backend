const router = require("express").Router();

const product_controller = require("../controllers/product.controller");
const product_validation = require("../validation/product.validation");

//const product_validation = require('../validation/auth.validation.js');

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

router.post("/", upload.single('photo'), product_validation.create, product_controller.create);
router.get("/", product_controller.findAll);
router.get("/:id", product_controller.findOne);
router.delete("/", product_controller.deleteAll);
router.delete("/:id", product_controller.delete);

/*
router.get("/:id", posts.findOne);
router.put("/:id", posts.update);
router.delete("/:id", posts.delete);
router.delete("/", posts.deleteAll);
*/

module.exports = router;
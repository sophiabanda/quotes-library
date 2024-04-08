var express = require("express");
var router = express.Router();
var authorsController = require("../controller/authors");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET page to create an Author
router.get("/new", authorsController.new);

module.exports = router;
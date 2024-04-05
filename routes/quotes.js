var express = require("express");
var router = express.Router();
var quotesController = require('../controller/quotes');
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET quotes
router.get("/", ensureLoggedIn, quotesController.index);

module.exports = router;

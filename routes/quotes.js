var express = require("express");
var router = express.Router();
var quotesController = require('../controller/quotes');
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET quotes
router.get("/", quotesController.index);
//NEW quote
router.get("/new", ensureLoggedIn, quotesController.new);
// POST
router.post("/", ensureLoggedIn, quotesController.create);

module.exports = router;

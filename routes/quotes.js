var express = require("express");
var router = express.Router();
var quotesController = require("../controller/quotes");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET quotes
router.get("/", quotesController.index);
//NEW page to Create a quote
router.get("/new", quotesController.new);
// POST Create functionality
router.post("/", quotesController.create);
// GET page to single quote to Edit
router.get("/:id/edit", quotesController.edit);
// PUT Edit functionality
router.put("/:id", quotesController.update);
// DELETE Delete functionality
router.delete("/:id", quotesController.delete);
module.exports = router;

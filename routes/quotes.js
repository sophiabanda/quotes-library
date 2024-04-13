var express = require('express');
var router = express.Router();
var quotesController = require('../controller/quotes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET All quotes
router.get('/', ensureLoggedIn, quotesController.index);
// GET My quotes
router.get('/show', ensureLoggedIn, quotesController.show);
//NEW page to Create a quote
router.get('/new', ensureLoggedIn, quotesController.new);
// POST Create functionality
router.post('/', ensureLoggedIn, quotesController.create);
// GET page to single quote to Edit
router.get('/:id/edit', ensureLoggedIn, quotesController.edit);
// PUT Edit functionality
router.put('/:id', ensureLoggedIn, quotesController.update);
// DELETE Delete functionality
router.delete('/:id', ensureLoggedIn, quotesController.delete);

module.exports = router;

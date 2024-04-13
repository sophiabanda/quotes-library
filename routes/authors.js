var express = require('express');
var router = express.Router();
var authorsController = require('../controller/authors');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET Show All Authors
router.get('/', ensureLoggedIn, authorsController.show);
// GET page to create an Author
router.get('/new', ensureLoggedIn, authorsController.new);
// POST Create a new Author functionality
router.post('/', ensureLoggedIn, authorsController.create);
//GET page to Edit an Author
router.get('/:id/edit', ensureLoggedIn, authorsController.edit);
//PUT functionality to Edit Author
router.put('/:id', ensureLoggedIn, authorsController.update);
//DELETE Author
router.delete('/:id', authorsController.delete);


module.exports = router;
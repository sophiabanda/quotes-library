const Author = require('../models/author');
const Quote = require('../models/quote');

module.exports = {
    new: newAuthor,
    create,
    show,
    edit,
    update,
    delete: deleteAuthor
}

async function show(req, res) {
    const authors = await Author.find({}).populate('authoredQuotes');
    res.render('authors/show', { title: 'All Authors', authors })
}

function newAuthor(req, res) {
    res.render('authors/new', { title: 'Add an Author' })
}

async function create(req, res) {
    try {
        await Author.create(req.body);
        res.redirect('/authors')
    } catch(error) {
        console.log('error -->', error);
    }
}

async function edit(req, res) {
    const quotes = await Quote.find({});
    const author = await Author.findOne({ _id: req.params.id });
    if (!author) return res.redirect('/authors');
    res.render('authors/edit', { title: `Edit ${ author.name }`, author, quotes });
  }

  async function update(req, res) {
    try {
        let updates = {};
        if (req.body.name) updates.name = req.body.name;
        if (req.body.birthDate) updates.birthDate = req.body.birthDate;
        if (req.body.bio) updates.bio = req.body.bio;
        if (req.body.url) updates.url = req.body.url;
        if (req.body.authoredQuotes) {
            updates.authoredQuotes = req.body.authoredQuotes;
        }
        updates = { $set: updates };
        const author = await Author.findOneAndUpdate(
            { _id: req.params.id },
            updates,
            { new: true }
        ).populate('authoredQuotes');
        res.redirect('/authors');
    } catch(error) {
        console.log('error -->', error);
    }
}

  async function deleteAuthor(req, res) {
    try {
        await Author.deleteOne({ _id: req.params.id });
        res.redirect('/authors')
    } catch(error) {
        console.log('error-->', error);
    }
  }
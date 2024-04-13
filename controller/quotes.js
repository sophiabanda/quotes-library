const Quote = require('../models/quote');
const Author = require('../models/author');
const User = require('../models/user');

module.exports = {
    index,
    new: newQuote,
    create,
    edit,
    delete: deleteQuote,
    update,
    show 
}

async function show(req, res) {
    try {
        const quotes = await Quote.find({}).populate('author')
        res.render('quotes/show', { title: 'My Quotes', quotes });
    } catch (error) {
        res.render('error', { message: error.message, error: error });

        res.redirect('/quotes');
    }
}

async function index(req, res) {
    try {
        const quotes = await Quote.find({}).populate('author')
        res.render('quotes/index', { title: 'All Quotes', quotes });
    } catch (error) {
        res.render('error', { message: error.message, error: error });
    }
}

async function newQuote(req, res) {
    try {
        const user = await User.find({});
        res.render('quotes/new', { title: 'Add a new Quote', user });
    } catch (error) {
        res.render('error', { message: error.message, error: error });
    }
}

async function create(req, res) {
    const userId = req.user._id;
    try {
        const quote = await Quote.create(req.body);
        quote.userId = userId;
        await quote.populate('userId');
        await quote.save();
        res.redirect('/quotes');
    } catch (error) {
        res.render('error', { message: error.message, error: error });
    }
}

async function edit(req, res) {
    const authors = await Author.find({});
    const quote = await Quote.findOne({ _id: req.params.id }).populate('author');
    if (!quote) return res.redirect('/quotes');

    res.render('quotes/edit', { title: 'Edit Quote', quote, authors });
}

async function deleteQuote(req, res) {
    const superUser = "66107f31aaefc9ca74a8cf62";
    const userId = req.user._id;
    try {
        const quote = await Quote.findById(req.params.id);
        if (userId.toString() === superUser) {
            await Quote.deleteOne({_id: req.params.id});
            res.redirect('/quotes');
        } else if (userId.toString() !== quote.userId.toString()) {
            return res.status(403).send(`You don't have permission to delete this quote`);
        } else {
            await Quote.deleteOne({_id: req.params.id});
            res.redirect('/quotes');
        }
    } catch(error) {
        res.render('error', { message: error.message, error: error });
    }
}



async function update(req, res) {
    try {
        let updates = {};
        if(req.body.content) updates.content = req.body.content;
        if(req.body.author) updates.author = req.body.author;
        updates = { $set: updates };
        await Quote.findOneAndUpdate(
            { _id: req.params.id },
            updates,
            { new: true }
        ).populate('author');
        res.redirect('/quotes');
    } catch (error) {
        res.render('error', { message: error.message, error: error });

    }
}
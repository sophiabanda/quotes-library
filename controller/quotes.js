const Quote = require("../models/quote");

module.exports = {
    index,
    new: newQuote,
    create,
    edit
}

async function index(req, res) {
    const quotes = await Quote.find({});
    res.render("quotes/index", {title: "My Quotes", quotes});
}

function newQuote(req, res) {
    res.render("quotes/new", {title: "Add a new Quote"})
}

function create(req, res) {
    try {
        Quote.create(req.body);
        console.log('body-->', req.body);
        res.redirect("/quotes")
    } catch(error) {
        console.log('error -->', error)
    }
}

async function edit(req, res) {
    const quote = await Quote.findOne({_id: req.params.id});

    if (!quote) return res.redirect('/quotes');
    res.render('quotes/edit', { title: 'Edit Quote', quote });
  }


const Quote = require("../models/quote");
const Author = require("../models/author");

module.exports = {
    index,
    new: newQuote,
    create,
    edit,
    delete: deleteQuote,
    update
}

async function index(req, res) {
    try {
        const quotes = await Quote.find({});
        res.render("quotes/index", { title: "My Quotes", quotes });
    } catch (error) {
        console.log("error-->:", error);
        res.redirect("/quotes");
    }
}

function newQuote(req, res) {
    res.render("quotes/new", {title: "Add a new Quote"})
}

function create(req, res) {
    try {
        Quote.create(req.body);
        res.redirect("/quotes")
    } catch(error) {
        console.log("error -->", error)
    }
}

async function edit(req, res) {
    const authors = await Author.find({});
    const quote = await Quote.findOne({_id: req.params.id});
    if (!quote) return res.redirect("/quotes");
    
    res.render("quotes/edit", { title: "Edit Quote", quote, authors });
  }

  async function deleteQuote(req, res) {
    // deleteOne expects an object for deletion
   await Quote.deleteOne({_id: req.params.id});
   res.redirect("/quotes");
  }

async function update(req, res) {
    try {
        const quote = await Quote.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true }
        ).populate('author');
        res.redirect("/quotes");
        console.log('author?-->', quote.author)
    } catch(error) {
        console.log("Error:", error)
    }
}
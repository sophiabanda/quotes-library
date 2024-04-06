const Quote = require("../models/quote");

module.exports = {
    index,
    new: newQuote,
    create
}

async function index(req, res) {
    const quotes = await Quote.find({});
    console.log('quotes-->',quotes)
    res.render("quotes/index", {title: "Welcome to your Quotes Page!", quotes});
}

function newQuote(req, res) {
    res.render("quotes/new", {title: "Add a new Quote"})
}

async function create(req, res) { 
    try {
        
        const quote = await Quote.create(req.body);
        console.log(quote)
        res.redirect("/quotes");
    } catch(error) {
        console.log("error--->", error)
        res.render({errorMessage: error.message})
    }
}
const Quote = require("../models/quote");
const Author = require("../models/author");

module.exports = {
    new: newAuthor,
    create,
    show
}

async function show(req, res) {
    const authors = await Author.find({})
    res.render("authors/show", { title: "All Authors", authors })
}

function newAuthor(req, res) {
    res.render("authors/new", { title: "Add Author" })
}

async function create(req, res) {
    try {
        const author = await Author.create(req.body);
        console.log("author-->", author);
        res.redirect("authors");
    } catch(error) {
        console.log('error-->', error)
    }
}
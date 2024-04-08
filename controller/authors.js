const Quote = require("../models/quote");
const Author = require("../models/author");

module.exports = {
    new: newAuthor
}

function newAuthor(req, res) {
    res.render("authors/new", {title: "Add Author"})
}
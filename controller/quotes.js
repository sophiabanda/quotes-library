const Quote = require("../models/quote");
const Author = require("../models/author");
const User = require("../models/user");

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
        const quotes = await Quote.find({}).populate('author')
        res.render("quotes/index", { title: "My Quotes", quotes });
    } catch (error) {
        res.render("error", { message: error.message, error: error });

        res.redirect("/quotes");
    }
}

async function newQuote(req, res) {
    try {
        const user = await User.find({})
        res.render("quotes/new", { title: "Add a new Quote", user });
    } catch (error) {
        res.render("error", { message: error.message, error: error });
    }
}

async function create(req, res) {
    const userId = req.user._id;
    try {
        const quote = await Quote.create(req.body);
        quote.userId = userId;
        await quote.populate('userId');
        await quote.save();
        res.redirect("/quotes");
    } catch (error) {
        res.render("error", { message: error.message, error: error });
    }
}

async function edit(req, res) {
    const authors = await Author.find({});
    const quote = await Quote.findOne({ _id: req.params.id }).populate('author');
    if (!quote) return res.redirect("/quotes");

    res.render("quotes/edit", { title: "Edit Quote", quote, authors });
}

async function deleteQuote(req, res) {
    const userId = req.user._id;
    const quote = await Quote.findById(req.params.id);
    try {
        if(userId !== quote.userId) {
            res.redirect("/quotes");
        } else {
            await Quote.deleteOne({_id: req.params.id});
            res.redirect("/quotes")
        }
    } catch(error) {
        res.render("error", { message: error.message, error: error });
    }
}

async function deleteQuote(req, res) {
    await Quote.deleteOne({_id: req.params.id});
    res.redirect("/quotes");
}

async function update(req, res) {
    try {
        let updates = {};
        if (req.body.content) updates.content = req.body.content;
        if (req.body.author) updates.author = req.body.author;
        updates = { $set: updates };
        await Quote.findOneAndUpdate(
            { _id: req.params.id },
            updates,
            { new: true }
        ).populate("author");
        res.redirect("/quotes");
    } catch (error) {
        res.render("error", { message: error.message, error: error });

    }
}
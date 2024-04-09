const Author = require("../models/author");

module.exports = {
    new: newAuthor,
    create,
    show,
    edit,
    update,
    delete: deleteAuthor
}

async function show(req, res) {
    const authors = await Author.find({})
    res.render("authors/show", { title: "All Authors", authors })
}

function newAuthor(req, res) {
    res.render("authors/new", { title: "Add Author" })
}

function create(req, res) {
    try {
        Author.create(req.body);
        res.redirect("/authors")
    } catch(error) {
        console.log("error -->", error)
    }
}

async function edit(req, res) {
    const author = await Author.findOne({ _id: req.params.id });
    if (!author) return res.redirect("/authors");
    res.render("authors/edit", { title: `Edit ${ author.name }`, author });
  }

  async function update(req, res) {
    console.log('reqbody-->', req.body)
    try {
        let updates = {};
        if(req.body.name) updates.name = req.body.name;
        if(req.body.birthDate) updates.birthDate = req.body.birthDate;
        if(req.body.bio) updates.bio = req.body.bio;
        if(req.body.url) updates.url = req.body.url;
        updates = { $set: updates};
        await Author.findOneAndUpdate(
            { _id: req.params.id },
            updates,
            { new: true }
        );
        res.redirect("/authors");
    } catch(error) {
        console.log("error -->", error)

    }
  }

  async function deleteAuthor(req, res) {
    try {
        await Author.deleteOne({ _id: req.params.id });
        res.redirect("/authors")
    } catch(error) {
        console.log("error-->", error);
    }
  }
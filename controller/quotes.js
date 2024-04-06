

module.exports = {
    index
}

function index(req, res) {
    res.render('quotes/index', {title: "Welcome to your Quotes Page!"});
}
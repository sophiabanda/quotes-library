const Author = require('../models/author');
const Quote = require('../models/quote');

exports.performSearch = async (req, res) => {
  const searchTerm = req.query.q;
  console.log(searchTerm, req.query);
};

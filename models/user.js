const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    favoriteQuotes: [{
      type: Schema.Types.ObjectId,
      ref: 'Quote'
    }],
    favoriteAuthors: [{
      type: Schema.Types.ObjectId,
      ref: 'Author'
    }],
    email: String,
    avatar: String
  },{
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);
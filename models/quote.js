const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The schema defines the shape of the document
const quoteSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
<<<<<<< HEAD
        type: Schema.Types.ObjectId, ref: 'Author'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
=======
        type: Schema.Types.ObjectId, ref: "Author"
    }
>>>>>>> parent of 61cbc7d (AUTHORIZATION to quote deletion)
}, {timestamps: true});

// Compile the schema into a model, export
module.exports = mongoose.model('Quote', quoteSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The schema defines the shape of the document
const quoteSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    genre: [String],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true});

// Compile the schema into a model, export
module.exports = mongoose.model('Quote', quoteSchema);
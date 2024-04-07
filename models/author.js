const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    authoredQuotes: [{
        type: Schema.Types.ObjectId,
        ref: "Quote"
    }],
    birthDate: Date,
    bio: String,
    url: String,
}, {timestamps: true});

module.exports = mongoose.model("Author", authorSchema);
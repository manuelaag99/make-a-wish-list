const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    id: { type: String },
    postTitle: { type: String },
    postBody: { type: String },
    creationDate: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId }
})

module.exports = mongoose.model("Post", PostSchema);
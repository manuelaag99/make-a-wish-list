const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String
    },
    postBody: {
        type: String
    },
    creationDate: {
        type: String
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("Post", PostSchema);
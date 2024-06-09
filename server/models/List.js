const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    listName: { 
        type: String
    },
    listDescription: {
        type: String
    },
    listPrivacy: {
        type: String
    },
    creatorId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("List", ListSchema);
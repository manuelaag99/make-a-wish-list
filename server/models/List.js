const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    id: { 
        type: String
    },
    listName: { 
        type: String
    },
    creatorId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("List", ListSchema);
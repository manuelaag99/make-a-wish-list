const mongoose = require("mongoose");

const ListItemSchema = new mongoose.Schema({
    id: {
        type: String
    },
    itemName: {
        type: String
    }, 
    itemDescription: {
        type: String
    },
    itemPhotoUrl: {
        type: String
    },
    list: {
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("ListItem", ListItemSchema);
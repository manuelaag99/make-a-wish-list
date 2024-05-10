const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { 
        type: String
    },
    displayName: { 
        type: String
    },
    username: { 
        type: String
    },
    email: { 
        type: String
    },
    password: { 
        type: String
    },
    creationDate: { 
        type: String
    },
    birthDate: { 
        type: String
     }
})

module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    },
    profilePhotoUrl: {
        type: String
    }
})

module.exports = mongoose.model("User", UserSchema);
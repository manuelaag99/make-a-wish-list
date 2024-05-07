const mongoose = require("mongoose");

async function connectDB () {
    const conn = await mongoose.connect("mongodb+srv://admin-manuelaag99:Nwkg0tEWThBiGdke@cluster0.7cwhb62.mongodb.net/");

    console.log("connected to " + conn.connection.host);

}

module.exports = connectDB;
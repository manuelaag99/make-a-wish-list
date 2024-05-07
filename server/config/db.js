const mongoose = require("mongoose");

async function connectDB () {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("connected to " + conn.connection.host);
}

module.exports = connectDB;
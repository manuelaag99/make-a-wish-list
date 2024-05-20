require('dotenv').config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 8000
const app = express();
const cors = require("cors");
const connectDB = require("./config/db")

console.log(process.env.PORT)

connectDB();
// app.all("/graphql", createHandler({
//     schema,
//     graphiql: process.env.NODE_ENV === "development"
// }));

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    // graphiql: process.env.NODE_ENV === "development"
    graphiql: true
}))

app.listen(port, console.log("Server running on port " + port));
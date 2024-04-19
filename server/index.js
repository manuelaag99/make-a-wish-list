require('dotenv').config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 8000
const app = express();

console.log(process.env.PORT)

// app.all("/graphql", createHandler({
//     schema,
//     graphiql: process.env.NODE_ENV === "development"
// }));

app.use("/graphql", graphqlHTTP({
    schema,
    // graphiql: process.env.NODE_ENV === "development"
    graphiql: true
}))

app.listen(port, console.log("Server running on port " + port));
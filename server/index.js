// import express from "express";
// import "dotenv/config";
// import { createHandler } from "graphql-http/lib/use/express";
// import { graphqlHTTP } from "express-graphql";
// import schema from "./schema/schema";
const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT;
const app = express();

// app.all("/graphql", createHandler({
//     schema,
//     graphiql: process.env.NODE_ENV === "development"
// }));

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port, console.log("Server running on port " + port));
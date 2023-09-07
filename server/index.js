import express from "express";
import "dotenv/config";

const port = 4000
const app = express();

app.listen(port, console.log("Server running on port 4000."));
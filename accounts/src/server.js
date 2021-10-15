const express = require("express");
// TODO - EJS module setup
// import { accountsRoute } from "./routes";
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw);
// app.use(accountsRoute);

module.exports = app;

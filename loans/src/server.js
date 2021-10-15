const express = require("express");
const bodyParser = require("body-parser");
// TODO - EJS module setup
// import { loansRoute } from "./routes";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw);
// app.use(accountsRoute);

module.exports = app;

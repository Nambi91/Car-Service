const express = require("express");
const path = require("path");
const app = express();

require("./start/db")();
require("./start/routes")(app);

module.exports = app;
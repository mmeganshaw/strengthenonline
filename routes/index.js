const express = require("express");
const app = express();
const path = require("path");

// sets routes for serving each page of the website
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    })
};
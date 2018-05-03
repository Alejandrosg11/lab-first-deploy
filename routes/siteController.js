const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyCD8mnMeQGlSJ9woL4hYuVs-4E04FuEcao" });
});

module.exports = siteController;

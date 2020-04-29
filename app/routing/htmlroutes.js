// set our dependency

var path = require("path");

module.exports = function(app) {

  // API routes for visiting pages

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // default to home if no matching route is found
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};

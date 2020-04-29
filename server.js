// require express

var express = require("express");

// create an express server

var app = express();

// set the port we'll use for our listener
var PORT = process.env.PORT || 8080;

// express.json and express.urlEncoded helps our server interpret data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  route files for our server

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

var express = require("express");
// to parse the body
var bodyParser = require("body-parser"); 
// module used for working with path-related
var path = require("path"); 
var search = require("./word");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

//  Home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dict.html"));
});

// Search page
app.post("/search", function (req, res) {
  search.wordMeaning(res, req.body.searchTerm);
});

var server = app.listen(8080, function () {
  console.log("Server is running on port 8080...");
});

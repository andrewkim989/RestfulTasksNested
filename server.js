var express = require("express");
var app = express();
app.use(express.static(__dirname + "/RestfulTasksNested/dist/RestfulTasksNested"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(7890, function() {
    console.log("listening on port 7890");
});
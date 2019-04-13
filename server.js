var express = require('express');
var app = express();

var get = require('./requests/get');
var post = require ('./requests/post')

// Post requests
post.post(app)
// Get requests
get.get(app)
get.getById(app)


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
})
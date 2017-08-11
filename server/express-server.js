var express = require('express');
var app = express();

// さーばースタート
app.use('/', express.static('./public'));
var server = app.listen(3000, function(){
  console.log("server start!");
});

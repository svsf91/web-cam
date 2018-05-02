//using express with node js
var express = require('express');

//initialize app as an express application
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/dist'));
app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/dist/index.html');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

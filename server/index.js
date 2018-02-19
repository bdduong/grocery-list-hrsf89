var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/data.js');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/groceries', function(req, res) {
  console.log(req.body);
  console.log('post request came');
  db.save(req.body);
  res.status(201);
  res.send('got post request');
});

app.get('/groceries', function(req, res) {
  db.fetch((data) => res.send(data));
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});


// comment out to unbreak
// var server = require('jsonapi-server');

var app = require('express')();

app.get('*', (req, res) => {
  res.send('Hello from Express.js!');
});
app.listen(12345);

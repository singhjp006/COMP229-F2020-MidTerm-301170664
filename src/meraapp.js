const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/about', function (req, res) {
    res.send('Hello World from very new about page');
  });
 
app.listen(3000 ,() => {
    console.log('Server started.');
});
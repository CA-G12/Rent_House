const express = require('express');

const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 8000);
app.get('/', (req, res) => {
  res.send('Hiiiii');
});

module.exports = app;

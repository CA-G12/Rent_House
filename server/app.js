const { join } = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'index.html'));
});

app.set('port', process.env.PORT || 5000);

app.use(router);

module.exports = app;

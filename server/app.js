const { join } = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(join(__dirname, '..', 'client')));

app.set('port', process.env.PORT || 5000);

app.use(router);

module.exports = app;

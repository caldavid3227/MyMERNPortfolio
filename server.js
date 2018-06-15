const express = require('express');
const bodyParser = require('body-parser');
const React = require('react');
const mongoDB = require('mongodb');
const mongoose = require('mongoose');

const app = express();

app.set('PORT', 3227);
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('PORT'), function() {
  console.log('Express server listening on PORT ' + app.get('PORT'));
});

module.exports = app;
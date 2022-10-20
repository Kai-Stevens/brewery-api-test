// external Imports
const express = require('express');
const cors = require('cors');
// Internal imports
const homeRouter = require('./routes/homeRoute.js')
const breweriesRouter = require('./routes/breweryRoutes.js');

// configuration
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/', homeRouter);
app.use('/breweries', breweriesRouter);

module.exports = app;
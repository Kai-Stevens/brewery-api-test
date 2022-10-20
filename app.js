// external Imports
const express = require('express');
const cors = require('cors');

// interal imports
// const quotesRouter = require('./routes/quotesRoutes');
// const homeRouter = require('./routes/homeRoutes');

// configuration
const app = express();
app.use(cors());
app.use(express.json());

// routes
// app.use('/', homeRouter);
// app.use('/quotes', quotesRouter);

module.exports = app;
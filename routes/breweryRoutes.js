const express = require('express');
const router = express.Router();

// Import quotes from the controller
const brewery = require("../controllers/breweryController");

// Basic GETS
router.get('/', brewery.showBreweries);

router.get('/random', brewery.showRandom);

router.get('/search', brewery.searchBreweries);

router.get('/:id', brewery.showIndex);

// Advanced GETS
// Export the router to app
module.exports = router;
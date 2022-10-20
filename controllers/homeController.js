const Brewery = require("../models/Brewery");

const index = (req, res) => {
    try {
        const breweries = Brewery.showAll();
        res.send(`Welcome to the Brewery API! There are ${breweries.length} available.`);

    } catch (err) {
        res.status(500).send({err: "Server error"});
    }
}

module.exports = { index }

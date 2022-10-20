// Import Brewery, this is our model
const Brewery = require("../models/Brewery");

const showAll = (req, res) => {
  try {
    const breweries = Brewery.showAll();
    res.send(breweries);
  } catch (err) {
    res.status(500).send({error: "Something went wrong on our side"});
  }
}

const showRandom = (req, res) => {
  try {
    const brewery = Brewery.showRandom();
    res.send(brewery)
  } catch (err) {
    res.status(500).send({error: "Something went wrong on our side, couldn't get a random brewery"});
  }
}

const showIndex = (req, res) => {
  const id = req.params.id;

  try {
    const brewery = Brewery.showIndex(id);
    res.send(brewery);
  } catch (err) {
    res.status(500).send({error: "Brewery not found"});
  }
}

module.exports = {showAll, showIndex, showRandom}
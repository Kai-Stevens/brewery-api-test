// Import Brewery, this is our model
const Brewery = require("../models/Brewery");

const showBreweries = (req, res) => {

  try {
    if (req.query) {
      const query = req.query;
      const queryName = Object.keys(query)[0];
      const queryValue = Object.values(query)[0];

      const breweries = Brewery.handleQuery(queryName, queryValue);
      res.send(breweries);
    } else {
      const breweries = Brewery.showBreweries();
      res.send(breweries);
    }

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

const searchBreweries = (req, res) => {
  const searchValue = req.query.query;

  try {
    const brewery = Brewery.searchBreweries(searchValue);
    res.send(brewery);
  } catch (error) {
    res.status(500).send({err: "Search not found"});
  }
}

// const showCity = (req, res) => {
//   const city = req.query.by_city;
//   try {
//     const breweries = Brewery.showCity(city);
//     res.send(breweries);
//   } catch (err) {
//     res.status(500).send({error: "City not found"});
//   }
// }

module.exports = {showBreweries, showIndex, showRandom, searchBreweries}
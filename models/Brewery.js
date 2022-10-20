// Import the database
const breweries = require("../brewery");

class Brewery {
  constructor(brewery, id) {
    this.id = brewery.id;
    this.name = brewery.name;
    this.brewery_type = brewery.brewery_type;
    this.street = brewery.street;
    this.address_2 = brewery.address_2;
    this.address_3 = brewery.address_3;
    this.city = brewery.city;
    this.state = brewery.state;
    this.county_province = brewery.county_province;
    this.postal_code = brewery.postal_code;
    this.country = brewery.country;
    this.longitude = brewery.longitude;
    this.latitude = brewery.latitude;
    this.phone = brewery.phone;
    this.website_url = brewery.website_url;
    this.updated_at = brewery.updated_at;
    this.created_at = brewery.created_at;
  }

  // static shows that this function applies to the overall class
  static showBreweries() {
    return breweries.map((b, i) => new Brewery(b, i));
  }

  static showRandom() {
    const randIdx = Math.floor(Math.random() * breweries.length);
    return new Brewery(breweries[randIdx], randIdx);
  }

  static showIndex(id) {
    // filter searching for paramater id match with brewery.id 
    const filtered = breweries.filter(brewery => brewery.id == id)
    return new Brewery(filtered[0]);
    // return breweries.length > 0 ? new Brewery(breweries[idx], idx) : {error: "Brewery not found"};
  }

  static showWelcome() {
    const length = breweries.length;
    return `Welcome to our brewery API, there are ${length} breweries currently available`;
  }

  static handleQuery(queryName, queryValue) {
    const filtered = breweries.filter(brewery => brewery[`${queryName}`] == queryValue)
    return filtered.map((b, i) => new Brewery(b, i));
  }

  static searchBreweries(searchValue) {
    const filtered = breweries.filter(brewery => {
      const valueArray = Object.values(brewery)
      const searchResult = valueArray.filter(value => value != null ? value.includes(searchValue) : null)

      if (searchResult.length != 0 ) {
        return brewery;
      }
    });
    return filtered.map((b, i) => new Brewery(b, i));
  }
}

module.exports = Brewery;
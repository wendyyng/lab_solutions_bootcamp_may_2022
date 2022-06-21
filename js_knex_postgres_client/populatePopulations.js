const allPopulationData = require('./allCountries');

const populationArr = [];

const knex = require("./db/db");

knex("countries").select("*").then(countries => {
    allPopulationData.forEach(populationObj => {
        let country = countries.find(x => x.code == populationObj.countryCode);
        populationArr.push({
            year: populationObj.year,
            quantity: Math.floor(populationObj.value),
            "country_id": country.id
        })
    });

    knex("populations").insert(populationArr).then(data => {
        console.log(data)
        knex.destroy();
    })
})
const data = require('./allCountries');
const knex = require('./db/db');

const tableData = [];
data.map((item, i) => {
    const lastEntry = tableData[tableData.length - 1];
    if (
        lastEntry &&
        lastEntry.code === item.countryCode &&
        lastEntry.name === item.countryName
    ) {
        
    } else {
        tableData.push({
            name: item.countryName,
            code: item.countryCode,
        });
    }
}, []);

knex("countries")
    .insert(tableData)
    .returning('name', 'code')
    .then((data) => {
        console.log(data);
        knex.destroy();
    });
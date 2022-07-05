const knex = require('knex');
const knexfile = require('../knexfile'); //knexfile is the db configurations, so you can also call it dbConfig
const client = knex(knexfile.development);

module.exports = client;


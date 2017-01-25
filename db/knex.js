// // Get the current environment. If NODE_ENV is not set, assume we're in development
// const environment = process.env.NODE_ENV || 'development';
//
// // Get the knex configuration exported from the knexfile.js
// const knexConfig = require('../knexfile');
//
// // Get the configuration for the current environment
// const config = knexConfig[environment];
//
// // Get the knex module
// const knex = require('knex');
//
// // Connect to the database with the configuration for the current environment
// const knexConnection = knex(config);
//
// // Export the database connection to be used throughout our application
// module.exports = knexConnection;


// Condenses from above
// const environment = process.env.NODE_ENV || 'development';
// const config = require('../knexfile')[environment];
// module.exports = require('knex')(config);


// Condenses from above
var config = require("../knexfile")[process.env.NODE_ENV || "development"];
module.exports = require("knex")(config);

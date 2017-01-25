require("dotenv").load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://localhost/warmup-exercise'
  }
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + '?ssl=true'
  // }
};

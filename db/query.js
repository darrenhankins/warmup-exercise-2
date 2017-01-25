const knex = require('./knex');

module.exports = {

  // POST /auth/login

  findUserByEmail: function(email){
    return knex('user')
    .where('email', email)
    .first();
  },

  // POST /auth/signup
  createUser: function(user){
    console.log(user);
    return knex('user')
    .insert(user, '*')
    .then(users => {
      return users[0];
    })
  }


};

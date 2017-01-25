const knex = require('./knex');

module.exports = {

  findUserByEmail: function(email){
    return knex('user')
    .where('email', email)
    .first();
  },

  createUser: function(user){
    return knex('user')
    .insert(user, '*')
    .then(users => {
      return users[0];
    })
  }

};

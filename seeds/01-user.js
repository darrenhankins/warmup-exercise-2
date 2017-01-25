var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
        .then(function() {
            const users = [{
                id: 1,
                email: 'joe@crabshack.com',
                password: bcrypt.hash('password54321', 8)
            }, {
                id: 2,
                email: 'ralph@crabshack.com',
                password: bcrypt.hash('password12345', 8)
            }]
            return knex('user').insert(users);
        });
};

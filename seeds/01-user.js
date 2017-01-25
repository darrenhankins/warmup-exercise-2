var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
        .then(function() {
            const users = [{
                id: 1,
                email: 'test1@test1.com',
                password: bcrypt.hashSync('password123', 10)
            }, {
                id: 2,
                email: 'test2@test2.com',
                password: bcrypt.hashSync('password246', 10)
            }]
            return knex('user').insert(users);
        });
};

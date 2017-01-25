exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    // make, style, color, package, user_id
    // return knex('table_name').del()
    return knex.raw('DELETE FROM "car"; ALTER SEQUENCE car_id_seq RESTART WITH 1')
    // return knex.raw('DELETE FROM "car";')
        .then(function() {
            const cars = [{
                make: "Nissan",
                style: "Pathfinder",
                color: "Red",
                package: "LX",
                user_id: 1
            }, {
                make: "Nissan",
                style: "Frontier",
                color: "Black",
                package: "SE",
                user_id: 2
            }, {
                make: "Kia",
                style: "Optima",
                color: "Blue",
                package: "LE",
                user_id: 1
            }, {
                make: "Ford",
                style: "Explorer",
                color: "White",
                package: "LE",
                user_id: 1
            }, {
                make: "Kia",
                style: "Forte",
                color: "Silver",
                package: "EX",
                user_id: 2
            }]
            return knex('car').insert(cars);
        });
};

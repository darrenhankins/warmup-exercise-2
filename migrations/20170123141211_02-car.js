
exports.up = function(knex, Promise) {
  // make, style, color, package, user_id
  return knex.schema.createTable('car', function(table){
    table.increments();
    table.text('make');
    table.text('style');
    table.text('color');
    table.text('package');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('car');
};

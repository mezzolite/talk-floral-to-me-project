
exports.up = function(knex) {
    return knex.schema.createTable('bouquets', (bouquet) => {
        bouquet.increments()
        bouquet.string('name').notNullable().defaultsTo('')
    })
};

exports.down = function(knex) {
    return knex.chema.dropTable('bouquets')
};

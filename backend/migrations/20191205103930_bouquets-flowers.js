
exports.up = function(knex) {
    return knex.schema.createTable('bouquets-flowers', table => {
        table.increments()
        table.integer('bouquet_id')
        table.foreign('bouquet_id').references('id').inTable('bouquets')
        table.integer('flower_id')
        table.foreign('flower_id').references('id').inTable('flowers')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('bouquets-flowers')
};

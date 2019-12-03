
exports.up = function(knex) {
    return knex.schema.createTable('flowers', (flower) => {
        flower.increments()
        flower.string('name').notNullable().defaultsTo('')
        flower.string('description').notNullable().defaultsTo('')
        flower.string('image').notNullable().defaultsTo('')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('flowers')
};

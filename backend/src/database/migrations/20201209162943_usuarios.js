
exports.up = function(knex) {
    return knex.schema.createTable('users', function( table ) {
        table.string('crypto').primary();

        table.string('username').notNull();
        table.string('description').notNull().defaultTo('');

        table.string('email').notNull();
        table.string('password').notNull();
        
        table.date('created_at').notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};

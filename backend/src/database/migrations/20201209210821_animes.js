
exports.up = function(knex) {
    return knex.schema.createTable('animes', function( table ) {
        table.increments();

        table.string('crypto_a').notNull();
        table.foreign('crypto_a').references('crypto').inTable('users');

        table.string('title').notNull();
        table.string('sinopse').notNull();

        table.string('duration').notNull();
        table.string('rating').notNull();
        table.string('data').notNull();

        table.string('poster').notNull();
        table.string('backdrop').notNull();

        table.boolean('follow').notNull().defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('animes')
};

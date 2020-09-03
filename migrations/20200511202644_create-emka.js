exports.up = function(knex) {
    return knex.schema.createTable('usersadmin', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('created_at').notNullable();
    })
        .createTable('sessions', function(table) {
            table.string('session_id');
            table.string('expires').notNullable();
            table.string('data').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usersadmin').dropTable('sessions');
};

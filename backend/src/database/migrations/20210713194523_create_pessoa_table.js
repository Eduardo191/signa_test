
exports.up = function(knex) {
  return knex.schema.createTable('pessoa', function (table) {
    table.increments('id');
    table.string('nome_fantasia', 255).notNullable();
    table.string('cnpj_cpf', 20).notNullable();
})
};

exports.down = function(knex) {
  return knex.schema.dropTable('pessoa');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("populations", (table)=> {
        table.primary("id");
        table.increments("id");
        table.integer("year");
        table.bigInteger("quantity").unsigned();
        table.integer("country_id");
        table.foreign("country_id").references("countries.id");
        table.timestamps(true,true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("populations");
};

exports.up = function (knex) {
  return knex.schema.createTable("bills", (table) => {
    table.increments("id");
    table.integer("bill_total");
    table.integer("tax_percent");
    table.integer("tip_percent");
    table.integer("group_size");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schemadropTable("bills");
};

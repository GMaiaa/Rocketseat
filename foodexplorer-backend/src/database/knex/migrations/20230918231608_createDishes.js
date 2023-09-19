exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.float("price");
    table.text("category")
  });
  
  exports.down = knex => knex.schema.dropTable("dishes");
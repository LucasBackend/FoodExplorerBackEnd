exports.up = knex =>knex.schema.createTable("FavoriteProducts",table=>{

  table.increments("id");
  table.integer("product_id").references("id").inTable("Products").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("Users").onDelete("CASCADE");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("update_at").default(knex.fn.now());



})


exports.down = knex => knex.schema.dropTable("FavoriteProducts");
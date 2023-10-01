exports.up = knex =>knex.schema.createTable("Products",table=>{

  table.increments("id");
  table.text("name").notNullable();
  table.text("category").notNullable();
  table.float("price").notNullable();
  table.text("image").notNullable();
  table.varchar("description",500);
  table.integer("user_id").references("id").inTable("Users").onDelete("CASCADE")
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("update_at").default(knex.fn.now());



})


exports.down = knex => knex.schema.dropTable("Products");
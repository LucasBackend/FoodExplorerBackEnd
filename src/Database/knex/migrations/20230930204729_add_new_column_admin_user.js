exports.up = knex =>knex.schema.table("Users",table=>{

  table.boolean('admin').defaultTo(false);



})


exports.down = knex => knex.schema.table("Users",table=>{

  table.dropColumns('admin')

});

const path = require("path")

module.exports = {

  development: {
    client: 'postgresql', // Mude para 'postgresql'
    connection: {
      host: process.env.HOST,
      port: '5432',
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      ssl:true,
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      directory: path.resolve(__dirname,"src","Database",'knex',"migrations")
    },

    useNullAsDefault: true
  }

}

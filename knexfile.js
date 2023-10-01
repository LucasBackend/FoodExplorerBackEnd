const path = require("path")

module.exports = {

  development: {
    client: 'postgresql', // Mude para 'postgresql'
    connection: {
      host: 'dpg-ck9lqougtj9c73b4g4ug-a.ohio-postgres.render.com',
      port: '5432',
      user: 'lhr_postgre_user' ,
      password: 'd0vwPYA5ceisEUjFqJ22HEnM02Yq7B1N',
      database: 'lhr_postgre',
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
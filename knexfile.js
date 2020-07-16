// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/job-saver.db'
    }
  },

  // production: {
  //   client: 'sqlite3',
  //   connection: {
      
  //     // database: 'my_db',
  //     // user:     'username',
  //     // password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
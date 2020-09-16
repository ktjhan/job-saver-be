// Update with your config settings.

require('dotenv').config();
const sqlite3 = {
    client: "sqlite3",
    useNullAsDefault: true,
    // pool: {
    //     afterCreate: (conn, done) => {
    //         conn.run("PRAGMA foreign_keys = ON", done);
    //     }
    // }
};
const commonDB = {
    migrations: {
        tableName: "knex_migrations",
        directory: "./database/migrations"
    },
    seeds: {
        directory: "./database/seeds"
    },
};
const localDB = {
    ...sqlite3,
    ...commonDB,
    connection: {
        filename: `${__dirname}/database/${process.env.NODE_ENV === 'test' ? 'test' : 'job-saver'}.db`
    }
};


module.exports = {
    development: {
        ...localDB
    },
    test: {
        ...localDB
    },
    production: {
      ...localDB
    }
};
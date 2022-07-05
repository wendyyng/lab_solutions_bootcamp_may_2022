// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'todo_review'
      // Linux users must include db username and password
      // username: '',
      // password: ''
    },
    migrations: {
      tableName: "migrations",
      directory: "db/migrations" //tell knex where our migration files will be created
    },
    seeds: {
      directory: "db/seeds"
    }
  } 

};

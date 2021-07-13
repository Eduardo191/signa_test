module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'signa_test'
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }

};
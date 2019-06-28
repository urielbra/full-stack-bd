

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
} else {
  module.exports = {
    user: 'postgres',
    host: 'localhost',
    database: 'lembretes',
    password: '',
    port: 5432,
  }
}
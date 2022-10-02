require('dotenv').config()

module.exports = {
  connectionLimit: 10,
  dialect: 'mysql',
  host: 'us-cdbr-east-06.cleardb.net',
  database: 'heroku_f9da8aacf8877f1',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: false,
    underscored: true
  }
}

require('dotenv').config()

module.exports = {
  dialect: 'mysql',
  host: 'us-cdbr-east-06.cleardb.net',
  database: 'heroku_f9da8aacf8877f1',
  username: 'b8e9522ca52cdf',
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: false,
    underscored: true
  }
}

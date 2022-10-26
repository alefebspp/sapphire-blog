require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  database: 'pdoposts',
  username: 'root',
  password: '37530167',
  define: {
    timestamps: false,
    underscored: true
  }
};

const { Model, DataTypes } = require('sequelize')
const sequelize = require('sequelize')
const Post = require('./Post')
const Info = require('./Info')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        cadastrado: DataTypes.STRING
      },

      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.hasMany(models.Post, {
      foreignKey: 'user_id',
      as: 'posts'
    })
    this.hasMany(models.Info, {
      foreignKey: 'user_id',
      as: 'infos'
    })
    this.hasMany(models.Comment, {
      foreignKey: 'user_id',
      as: 'comments'
    })
  }
}

module.exports = User

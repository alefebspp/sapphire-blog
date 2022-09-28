const { Model, DataTypes } = require('sequelize')
const sequelize = require('sequelize')
const User = require('./User')

class Info extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        user_image: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'userInfo'
    })
  }
  static associate(models) {
    this.belongsToMany(models.Post, {
      through: {
        model: models.Comment
      },
      foreignKey: 'userinfo_reference',
      as: 'post_comment'
    })
  }
}

module.exports = Info

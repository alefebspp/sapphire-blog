const { Model, DataTypes } = require('sequelize')
const sequelize = require('sequelize')
const User = require('./User')

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        conteudo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        created_at: DataTypes.DATE
      },

      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userPost' })
  }

  static associate(models) {
    this.belongsToMany(models.Info, {
      through: {
        model: models.Comment
      },
      foreignKey: 'post_reference',
      as: 'info_comment'
    })
  }
}

module.exports = Post

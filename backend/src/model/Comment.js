const { Model, DataTypes } = require('sequelize')

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        conteudo: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'userComment'
    })
  }
}

module.exports = Comment

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const User = require('../model/User')
const Post = require('../model/Post')
const Info = require('../model/Info')
const Comment = require('../model/Comment')
const connection = new Sequelize(dbConfig)

//Indicando para o sequelize e banco de dados o model que será usado
User.init(connection)
Post.init(connection)
Info.init(connection)
Comment.init(connection)

Comment.associate(connection.models)
Post.associate(connection.models)
Info.associate(connection.models)
User.associate(connection.models)
module.exports = connection

const User = require('../model/User')
const Post = require('../model/Post')
const Info = require('../model/Info')
const { hashPassword } = require('../services/auth')

module.exports = {
  async index(req, res) {
    const user = await User.findAll()
    return res.json(user)
  },

  async findById(req, res) {
    const { id } = req.params
    const user = await User.findAll({
      where: {
        id: id
      }
    })
    return res.json(user)
  },

  async createUser(req, res) {
    const { username } = req.body

    try {
      const findUser = await User.findOne({ where: { username: username } })
      if (findUser) {
        res.status(400).send({ msg: 'Usuário já existe!' })
      } else {
        const password = hashPassword(req.body.password)
        const user = await User.create({ username, password })
        return res.status(200).json(user)
      }
    } catch (error) {
      return res.status(400).json(error)
    }

    // }
  },

  async deleteUser(req, res) {
    const { id } = req.params
    const user = await User.destroy({
      where: {
        id: id
      }
    })
    return res.send({ msg: 'Usuário excluído!' })
  },

  async updateUser(req, res) {
    const { id } = req.params
    const { username, password, cadastrado } = req.body

    const updatedUser = await User.update(
      { username, password, cadastrado },
      {
        where: {
          id: id
        }
      }
    )
    return res.json(updatedUser)
  },
  async getAllUsersInfos(req, res) {
    try {
      const info = await User.findAll({
        include: {
          all: true
        }
      })
      return res.status(201).json(info)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

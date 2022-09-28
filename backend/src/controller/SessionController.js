const jwt = require('jsonwebtoken')
const User = require('../model/User')
const { comparePassword } = require('../services/auth')
const authConfig = require('../config/auth')

module.exports = {
  async create(req, res) {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username: username } })
    if (!user) {
      return res.status(401).json({ error: 'Usuário / Senha não encontradas' })
    }

    const comparedPassword = comparePassword(password, user.password)

    if (!comparedPassword) {
      return res.status(401).json({ error: 'A senha não confere' })
    }

    const { id, cadastrado } = user

    return res.json({
      user: {
        id,
        cadastrado,
        username
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

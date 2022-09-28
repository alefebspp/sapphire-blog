const Info = require('../model/Info')

module.exports = {
  async createUserInfo(req, res) {
    const { nome, sobrenome, user_id, user_image } = req.body
    try {
      const response = await Info.create({
        nome,
        sobrenome,
        user_id,
        user_image
      })
      return res.status(201).json(response)
    } catch (error) {
      return res.status(400).send(console.log(error))
    }
  },
  async getUserInfo(req, res) {
    const { id } = req.params
    try {
      const response = await Info.findAll({
        where: {
          user_id: id
        }
      })
      return res.status(201).json(response)
    } catch (error) {
      return res.status(400).send(console.log(error))
    }
  },

  async getUsersInfo(req, res) {
    try {
      const response = await Info.findAll()
      return res.status(201).json(response)
    } catch (error) {
      return res.status(400).json(console.log(error))
    }
  }
}

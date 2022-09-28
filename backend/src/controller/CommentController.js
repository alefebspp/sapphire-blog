const Comment = require('../model/Comment')
const Post = require('../model/Post')

module.exports = {
  async createComment(req, res) {
    const { conteudo, post_reference, userinfo_reference, user_id } = req.body
    try {
      const comment = await Comment.create({
        conteudo: conteudo,
        post_reference: post_reference,
        userinfo_reference: userinfo_reference,
        user_id: user_id
      })
      return res.status(200).json(comment)
    } catch (error) {
      return res.status(401).json(console.log(error))
    }
  },

  async deleteComment(req, res) {
    const { id } = req.params
    try {
      const comment = await Comment.destroy({
        where: {
          id: id
        }
      })
      return res.status(200).json({ msg: 'Comentário deletado!' })
    } catch (error) {
      return res.status(401).json(console.log(error))
    }
  },

  async updateComment(req, res) {
    const { id } = req.params
    const { conteudo } = req.body

    try {
      const comment = await Comment.update(
        {
          conteudo
        },
        {
          where: {
            id: id
          }
        }
      )
      return res.status(200).json({ msg: 'Comentário atualizado!' })
    } catch (error) {
      return res.status(401).json(console.log(error))
    }
  }
}

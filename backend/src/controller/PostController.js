const Post = require('../model/Post')
const Info = require('../model/Info')
const User = require('../model/User')

module.exports = {
  async createPost(req, res) {
    const { conteudo, user_id, titulo } = req.body
    try {
      const post = await Post.create({ conteudo, user_id, titulo })
      return res.status(201).json(post)
    } catch (error) {
      return res.status(400).send(console.log(error))
    }
  },

  async listPosts(req, res) {
    const { id } = req.params
    try {
      const post = await Post.findAll({
        where: {
          user_id: id
        }
      })
      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).send(console.log(error))
    }
  },

  async listPost(req, res) {
    const { id } = req.params
    try {
      const post = await Post.findAll({
        where: {
          id: id
        }
      })
      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).send(console.log(error))
    }
  },

  async deletePost(req, res) {
    const { id } = req.params
    try {
      const post = await Post.destroy({
        where: {
          id: id
        }
      })
      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).send(console.log(error))
    }
  },

  async updatePost(req, res) {
    const { postId } = req.params
    const { titulo, conteudo } = req.body
    const post = await Post.findAll({
      where: {
        id: postId
      }
    })
    try {
      if (post) {
        const updatedPost = await Post.update(
          {
            titulo: titulo,
            conteudo: conteudo
          },
          {
            where: {
              id: postId
            }
          }
        )
        return res.status(200).json(updatedPost)
      }
    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async getComments(req, res) {
    const { id } = req.params
    try {
      const comments = await Post.findAll({
        where: {
          id: id
        },
        include: {
          all: true
        }
      })
      return res.status(200).json(comments)
    } catch (error) {
      return res.status(400).json(console.log(error))
    }
  }
}

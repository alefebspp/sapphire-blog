const { Router } = require('express')
const router = Router()
const PostController = require('../controller/PostController')

router.post('/create', PostController.createPost)
router.get('/list/:id', PostController.listPosts)

router.get('/list/post/:id', PostController.listPost)
router.delete('/delete/:id', PostController.deletePost)
router.get('/comments/:id', PostController.getComments)
module.exports = router

const { Router } = require('express')
const CommentController = require('../controller/CommentController')
const router = Router()

router.post('/create/', CommentController.createComment)
router.delete('/delete/:id', CommentController.deleteComment)
router.patch('/update/:id', CommentController.updateComment)
module.exports = router

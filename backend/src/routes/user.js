const { Router } = require('express')
const UserController = require('../controller/UserController')
const SessionController = require('../controller/SessionController')
const { auth } = require('../middleware/auth')
const router = Router()

router.post('/session', SessionController.create)
router.post('/user/create', UserController.createUser)
router.get('/user/info', UserController.getAllUsersInfos)
router.get('/user/:username', UserController.findByUsername)
router.use(auth)

router.get('/user', UserController.index)

router.get('/user/:id', UserController.findById)
router.delete('/user/:id', UserController.deleteUser)
router.patch('/user/:id', UserController.updateUser)

module.exports = router

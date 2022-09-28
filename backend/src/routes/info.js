const { Router } = require('express')
const router = Router()
const InfoController = require('../controller/InfoController')

router.post('/create', InfoController.createUserInfo)
router.get('/:id', InfoController.getUserInfo)
router.get('/', InfoController.getUsersInfo)
module.exports = router

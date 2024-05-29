const express = require('express')
const { authController } = require('../controllers')
const { authValidation } = require('../validation')

const authRouter = express.Router()

authRouter.post(
    '/register',
    authValidation.userRegisterValidation,
    authValidation.checkDuplicateUser,
    authController.userRegister,
)
authRouter.post('/login', authController.login)
authRouter.get('/seed-data', authController.seedData)

module.exports = authRouter

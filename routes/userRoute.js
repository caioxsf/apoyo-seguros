import express from 'express'
import UserController from '../controller/userController.js'

const router = express.Router()
let ctrl = new UserController()

router.get('/users', (req,res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Endpoint to get all users'
    ctrl.getUsers(req,res)
})

router.post('/users', (req,res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Endpoint to create users'
    ctrl.createUser(req,res)
})

export default router
const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/controller')


function Router(User){
    let Controller = controller(User)
    userRouter.route('/')
        .get(Controller.get)
        .post(Controller.post)
       
    userRouter.route('/:id')
        .get(Controller.getById)
        .put(Controller.update)
        .delete(Controller.deleteOne)

    return userRouter
        
}

module.exports = Router
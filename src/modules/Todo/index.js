import express from 'express';
import TodoController from './Todo.controller';

/**
 * Setting up the router for the controller
 * @type {*|Router}
 */
const todoRouter = express.Router();

todoRouter.post('/todo',
    TodoController.addTodo);

todoRouter.get('/todo',
    TodoController.findTodo);

export default todoRouter;

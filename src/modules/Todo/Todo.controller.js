import { TodoService } from '../../services';

/**
 * A simple controller with 2 endpoints to add and fetch todos
 */
class TodoController {
    /**
     * Creates a todo by calling the service layer
     * @param req the express request object
     * @param res the express response object
     * @returns {Promise<any>}
     */
    static async addTodo(req, res) {
        try {
            const {
                name
            } = req.body;
            const todo = await TodoService.createTodo(name);
            if (!todo.isNewRecord) {
               return res.status(409).json({
                   message: 'Todo Already created'
               })
            }
           return res.status(200).json({
               message: 'Todo created',
               data: todo
           })
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Lists all todos in the db
     * @param req the express request object
     * @param res the exprress response object
     * @returns {Promise<any>}
     */
    static async findTodo(req, res) {
        try {
            const Todo = await TodoService.findTodos(req.query);
            if (!todo.length) {
              return res.status(404).json({
                  message: 'Not found'
              })
            }
            return res.status(200).json({
               Todos: Todo
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export default TodoController;

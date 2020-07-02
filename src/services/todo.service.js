import {Op} from 'sequelize';
import models from '../database/models';

const {
    Todo,
} = models;

/**
 * The Todo service which handles all database CRUD operations, interacting with the model
 */
class TodoService {
    /**
     *
     * @param {*} where, is a findtodos options.
     * The param filters the result depending on the where params
     */
    static async findTodos(where = null) {
        let filter;
        if (where && where.id) {
            filter = {
                where: {
                    id: where.id
                }
            };
        }
        if (where && where.name) {
            filter = {
                where: {
                    name: where.name
                }
            };
        }
        return await Todo.findAll({
            ...filter,
        });
    }

    /**
     * @description creates a todo if the name doesn't exist
     * @param {*} name
     * @returns {object} an array of todos
     */
    static async createTodo(name) {
        const [todo] = await Todo.findOrCreate({
            where: { name: { [Op.iLike]: `${name.trim()}%` } },
            defaults: { name }
        });
        const {
            _options: {
                isNewRecord
            },
            dataValues
        } = todo;
        return {
            todo: dataValues,
            isNewRecord
        };
    }
}

export default TodoService;

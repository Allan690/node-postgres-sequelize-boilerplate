module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
    }, {});
    return Todo;
};

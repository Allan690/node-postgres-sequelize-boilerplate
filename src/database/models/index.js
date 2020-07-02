import fs from 'fs';
import path from 'path';
import {createNamespace} from 'cls-hooked';
import {DataTypes, Sequelize} from 'sequelize';
import config from '../../config/database';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const db = {};

const namespace = createNamespace('sequelize-transaction');
Sequelize.useCLS(namespace);
const sequelize = new Sequelize(config[env].databaseUrl, config[env]);


fs
.readdirSync(__dirname)
.filter((file) => {
    return (file.indexOf('.') !== 0)
    && (file !== basename)
    && (file.slice(-3) === '.js');
})
.forEach((file) => {
const model = require(path.join(__dirname, file))(sequelize, DataTypes)
db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
if (db[modelName].associate) {
db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const sequelizeOptions = { logging: console.log(), };

sequelize.sync(sequelizeOptions)
.catch((err) => {
console.log(err);
process.exit();
});

module.exports = db;

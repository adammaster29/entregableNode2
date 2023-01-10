// instancia para la conexion de la base de datos 
const db = require("../utils/database");

// Tipos de datos de sequelize varchar(SQL)
const {DataTypes} = require('sequelize');

// Definir el modelo de usuarios 
// Los modelos se definen con una Mayuscula 

// Parametros
// Nombre de la tabla
// Los atributos de las tablas ( objeto )
const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Users;
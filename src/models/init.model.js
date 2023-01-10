// Es init por que es donde se inicializa la carpeta
// Vamos a importar todos nuestros modelos creados 
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories.models');
const Todos = require('./todos.models');
const Users = require('./users.model');


const initModels = () => {
    Categories;
    TodosCategories;
    // Vamos a crear las relaciones
    // hasOne ---> para indicar que tiene uno solo
    // hasMany ---> para indicar que tiene muchos 
    // belongsTo ---> pertenece a 
    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});
    // relaciones de M-M categories y tareas
    TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'})
    Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todo_id'})
    
    TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'})
    Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'})
};

module.exports = initModels;
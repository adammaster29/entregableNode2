const Todos = require("../models/todos.models");
const Users = require("../models/users.model");
const db = require("../utils/database");

const users = [
    {username: 'Ronaldo', email: 'ronaldo@gmail.com', password: '12345'},
    {username: 'Karina', email: 'karina@gmail.com', password: '12345'},
    {username: 'Elvia', email: 'elvia@gmail.com', password: '12345'},
];

const todos = [
    {title: 'tarea 1', description: 'shalala shalala 1', userId: 1},
    {title: 'tarea 2', description: 'shalala shalala 2', userId: 2},
    {title: 'tarea 2', description: 'shalala shalala 3', userId: 3},
];

// const categories = []; 

// const TodosCategories = []; 

db.sync({force: false})
  .then(() => {
    console.log("Iniciando con el sembradio malicioso")
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo))
    }, 100);
  })
  .catch((error) => console.log(error));


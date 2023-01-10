// importamos express 
const express = require('express'); 
const db = require("./utils/database")
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');
const userRoutes = require('./routes/users.routes')

// creamos una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;
// localhost:8000/
app.use("/api/v1", userRoutes);

// Probando la conexion a la base de datos 
db.authenticate()
.then(() => console.log("Autenticación exitosa"))
.catch(() => console.log("error"));

initModels();
// Vamos a usar el metodo sync de nuestra db
db.sync({force: false}) // Devuelve una promesa
.then(() => console.log('Base de datos sincronizada'))
.catch(() => console.log("error"));

app.get( '/', (req, res) => {
    res.status(200).json({ message: "Bienvenidos al servidor"})
});


// Definir las rutas de nuestros endpoints (de ahora en adelante ep)
// Todas las consultas de usuarios 
// Localhost:8000/users ---> todo para usuarios 
// Localhost:8000/todos ---> todo para tareas 

// GET a /users

app.get("/users", async(req, res) => {
    try {
        // Vamos a obtener el resultado de consultar a todos los usuarios de la DB
        const result = await Users.findAll(); // SELECT * FROM users
        res.status(200).json(result); 
    } catch (error) {
        console.log(error);
    }
});

// GET a /todos
app.get("/todos", async(req, res) => {
    try {
        // Vamos a obtener el resultado de consultar a todos las tareas de la DB
        const result = await Todos.findAll(); // SELECT * FROM todos
        res.status(200).json(result); 
    } catch (error) {
        console.log(error);
    }
});

// obtener un usuarios sabiendo su id
app.get("/users/:id", async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});

// obtener un tareas sabiendo su id
app.get("/todos/:id", async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const result = await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});

// obtener un usario por username
app.get("/users/username/:username", async(req, res) => {
    try {
        const {username} = req.params;
        const result = await Users.findOne({where: {username}}); // SELECT * FROM users WHERE username = Ronaldo
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});


// // obtener un tareas por title
// app.get("/todos/title/:title", async(req, res) => {
//     try {
//         const {title} = req.params;
//         const result = await Todos.findOne({where: {title}}); // SELECT * FROM todos WHERE title
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error)
//     }
// });

// Crear un usuario 
app.post("/users", async(req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error)
    }
});


// Actualizar un usuario
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Users.update(field, {
            where: {id}
        }); 
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error)
    }
}); 


// Eliminar un usuario
app.delete("/users/:id", async(req, res) => {
    try {
        const {id} = req.params; 
        const result = await Users.destroy({
            where: {id},
        }); 
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});


/// Vamos a terminar los modelos ---> Rapidos

// Vamos a insertar informacion en nuestra db
// desde nuestro proyecto node 

// consultar la informacion con endpoints


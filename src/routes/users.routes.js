const { Router } = require('express');

const {
    getAllUser,
    getAllUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controllers")

const router = Router();

// En vez de app.get, app.post, app.put, app.delete
// usamos 

// localhost:8000/users
// controlador
router.get('/users', getAllUser);
router.get('/users/:id', getAllUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
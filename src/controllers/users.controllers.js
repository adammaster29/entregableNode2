const UserServices = require("../services/user.services")


const getAllUser = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}


const getAllUserById = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}


const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const updateUser = async (req, res) => {
    res.json({message: "Actualizando un usuario"})
}
const deleteUser = (req, res) => {
    res.json({message: "Eliminando un usuario"})
}

module.exports = {
    getAllUser,
    getAllUserById,
    createUser,
    updateUser,
    deleteUser
};
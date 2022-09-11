const userService = require('../services/user');

const getUsers = async (req, res) => {
    const userData = await userService.getUsers();

    const users = userData.map((user) => ({
        userId: user.id,
        username: user.username,
        role: user.role,
        rank: user.rank,
        firstName: user.firstName,
        lastName: user.lastName,
    }));

    const data = {
        numberUsers: users.length,
        users: users,
    };

    res.send(200, data);
};

const getSelf = async (req, res) => {
    const user = await userService.getUserById(req.user.id);

    res.send(200, {
        userId: user.id,
        username: user.username,
        role: user.role,
        rank: user.rank,
        firstName: user.firstName,
        lastName: user.lastName,
    });
};

const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.userId);

    res.send(200, {
        userId: user.id,
        username: user.username,
        role: user.role,
        rank: user.rank,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
    });
};

const createUser = async (req, res) => {
    await userService.createUser(req.body);
    res.send(201);
};

module.exports = {
    getUsers,
    getSelf,
    getUserById,
    createUser,
};
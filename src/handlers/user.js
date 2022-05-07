const userService = require('../services/user');

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
    });
};

const createUser = async (req, res) => {
    await userService.createUser(req.body);
    res.send(201);
};

module.exports = {
    getSelf,
    getUserById,
    createUser,
};
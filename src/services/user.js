const { models } = require('../database');

const getUserById = async (userId) => {
    const data = await models.User.findOne({
        where: {
            id: userId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const user = {
        id: data.id,
        username: data.username,
        passphrase: data.passphrase,
        role: data.role,
        rank: data.rank,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        phone: data.phone,
    };

    return user;
};

const getUserByUsername = async (username) => {
    const data = await models.User.findAll({
        where: {
            username: username,
        },
    });

    if (data.length != 1) {
        throw 1;
    }

    const user = {
        id: data[0].id,
        username: data[0].username,
        passphrase: data[0].passphrase,
        role: data[0].role,
        rank: data[0].rank,
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        email: data[0].email,
        phone: data[0].phone,
    };

    return user;
};

module.exports = {
    getUserById,
    getUserByUsername,
};
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const jwt = require('jsonwebtoken');
const { models } = require('../database');

const createSessionForUser = async (user) => {
    // Create a token.
    const newToken = jwt.sign({ username: user.username }, process.env.JWT_SESSION_SECRET_KEY);

    // Add it to the database.
    await models.Session.create({
        user_id: user.id,
        access_token: newToken,
        created: new Date(),
        invalidated: false,
    });

    return newToken;
};

const invalidateSession = async (token) => {
    await models.Session.update({
        invalidated: true,
    }, {
        where: {
            access_token: token,
        },
    });
};

const invalidateSessionForUser = async (userId) => {
    await models.Session.update({
        invalidated: true,
    }, {
        where: {
            user_id: userId,
        },
    });
};

const decodeToken = async (token) => {
    var decodedObject = undefined;
    jwt.verify(token, process.env.JWT_SESSION_SECRET_KEY, (err, decoded) => {
        if (err) {
            decodedObject = null;
        } else {
            decodedObject = decoded;
        }
    });

    return decodedObject;
};

const getSessionFromToken = async (token) => {
    const data = await models.Session.findOne({
        where: {
            access_token: token,
        },
    });
    if (data === null) {
        throw 1;
    }

    const session = {
        id: data.id,
        userId: data.user_id,
        accessToken: data.access_token,
        created: data.created,
        invalidated: data.invalidated,
    };

    return session;
};

module.exports = {
    createSessionForUser,
    invalidateSession,
    invalidateSessionForUser,
    decodeToken,
    getSessionFromToken,
};
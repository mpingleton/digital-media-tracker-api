const { models } = require('../database');

const getBaseById = async (baseId) => {
    const data = await models.Base.findOne({
        where: {
            id: baseId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const base = {
        id: data.id,
        name: data.name,
    };

    return base;
};

module.exports = {
    getBaseById,
};
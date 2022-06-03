const baseService = require('../services/base');

const getBaseById = async (req, res) => {
    const base = await baseService.getBaseById(req.params.baseId);
    res.send(200, base);
};

const createBase = async (req, res) => {
    await baseService.createBase(req.body);
    res.send(201);
};

module.exports = {
    getBaseById,
    createBase,
};
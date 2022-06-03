const baseService = require('../services/base');

const getBaseById = async (req, res) => {
    const base = await baseService.getBaseById(req.params.baseId);
    res.send(200, base);
};

module.exports = {
    getBaseById,
};
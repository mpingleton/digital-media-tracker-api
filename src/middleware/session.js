const sessionService = require('../services/session');

const verifySession = async (req, res, nxt) => {
    // Get the token out of the header.
    const authorization = req.headers['authorization'];
    if (authorization == null) {
        res.send(401);
        return;
    }
    const accessToken = authorization.split(' ')[1];

    // Verify the token.
    const user = await sessionService.verifyToken(accessToken);
    if (user === null) {
        res.send(401);
        return;
    } else {
        req.user = user;
        nxt();
        return;
    }

    res.send(500);
};

module.exports = {
    verifySession,
};
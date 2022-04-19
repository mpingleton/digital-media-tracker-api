const userService = require('../services/user');
const sessionService = require('../services/session');

const verifySessionAndRole = (allowedRoles) => async (req, res, nxt) => {
    // Get the token out of the header.
    const authorization = req.headers['authorization'];
    if (authorization == null) {
        res.send(401);
        return;
    }
    const authorizationSplit = authorization.split(' ');
    if (authorizationSplit[0] != 'Bearer') {
        res.send(400);
        return;
    }
    const accessToken = authorizationSplit[1];

    // Look up the session from the token.
    const session = await sessionService.getSessionFromToken(accessToken);

    // Look up the user from the session.
    const user = await userService.getUserById(session.userId);
    if (user === null) {
        res.send(500);
        return;
    }

    // Decode the token and verify the decoded username matches the username listed on the session.
    const decodedObject = await sessionService.decodeToken(accessToken);
    if (decodedObject.username != user.username) {
        res.send(401);
        return;
    }

    // Make sure the session has not been invalidated.
    if (session.invalidated === true) {
        res.send(401);
        return;
    }

    // Verify the user's role.
    for (let allowedRole of allowedRoles) {
        if (user.role === allowedRole) {
            req.user = user;
            nxt();
            return;
        }
    }
    res.send(401);
};

module.exports = {
    verifySessionAndRole,
};
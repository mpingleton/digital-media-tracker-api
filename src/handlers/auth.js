const userService = require('../services/user');
const sessionService = require('../services/session');

const login = async (req, res) => {
    // Find the user based on the provided username.
    const user = await userService.getUserByUsername(req.body.username);
    if (user === null) {
        res.send(403);
        return;
    }
    
    // Verify the passphrase.
    if (req.body.passphrase != user.passphrase) {
        res.send(403);
        return;
    }

    // Create a session.
    const token = await sessionService.createSessionForUser(user);
    res.send(200, {
        accessToken: token,
    });
};

const logout = async (req, res) => {
    await sessionService.invalidateSessionForUser(req.user.id);
    res.send(200);
};

module.exports = {
    login,
    logout,
};
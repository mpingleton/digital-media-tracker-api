
const login = (req, res) => {
    res.send(500, 'Hello world!');
};

const logout = (req, res) => {
    res.send(500, 'Goodbye world!');
};

module.exports = {
    login,
    logout,
};
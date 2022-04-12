if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { Sequelize } = require('sequelize');

const User = require('./models/User');
const Session = require('./models/Session');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const models = {};

const initDatabase = async () => {
    await sequelize.authenticate();

    models.User = User(sequelize);
    models.Session = Session(sequelize);
};

const closeDatabase = async () => {
    await sequelize.close();
};

const syncModels = async () => {
    await sequelize.sync({ force: true });
};

module.exports = {
    sequelize,
    models,
    initDatabase,
    closeDatabase,
    syncModels,
};
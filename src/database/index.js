if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { Sequelize } = require('sequelize');

const User = require('./models/User');
const Session = require('./models/Session');
const Media = require('./models/Media');
const Container = require('./models/Container');
const Facility = require('./models/Facility');
const Base = require('./models/Base');
const UserToFacilityAssignment = require('./models/UserToFacilityAssignment');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const models = {};

const initDatabase = async () => {
    await sequelize.authenticate();

    models.User = User(sequelize);
    models.Session = Session(sequelize);
    models.Media = Media(sequelize);
    models.Container = Container(sequelize);
    models.Facility = Facility(sequelize);
    models.Base = Base(sequelize);
    models.UserToFacilityAssignment = UserToFacilityAssignment(sequelize);
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
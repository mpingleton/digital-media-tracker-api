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
const MediaTransfer = require('./models/MediaTransfer');
const AccountabilityCheck = require('./models/AccountabilityCheck');
const AccountabilityCheckItem = require('./models/AccountabilityCheckItems');
const MediaDocument = require('./models/MediaDocument');

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
    models.MediaTransfer = MediaTransfer(sequelize);
    models.AccountabilityCheck = AccountabilityCheck(sequelize);
    models.AccountabilityCheckItem = AccountabilityCheckItem(sequelize);
    models.MediaDocument = MediaDocument(sequelize);
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
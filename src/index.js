if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { initDatabase } = require('./database');
const routes = require('./routes');

const app = express();

const init = async () => {
    // Check for the necessary environment variables.
    if (process.env.DATABASE_URL === undefined) {
        throw "DATABASE_URL environment variable is not defined.";
    }

    // Connect to the database.
    await initDatabase();

    // Start the express server.
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api', routes);
    app.listen(3001, () => console.log(`Express server is running on port ${3001}.`));

    return 0;
}

init()
    .then((res) => {
        console.log('Initialization complete.');
    })
    .catch((err) => {
        console.log('Fatal Error: ' + err);
        process.exit(err);
    });
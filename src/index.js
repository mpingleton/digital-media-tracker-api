require('dotenv').config();
const express = require('express');
const app = express();

async function main() {
    // Check for the necessary environment variables.

    // Connect to the database.

    // Start the express server.

    return 0;
}

main()
    .then((res) => {
        console.log('Exiting: ' + res);
    })
    .catch((err) => {
        console.log('Fatal Error: ' + err);
    });
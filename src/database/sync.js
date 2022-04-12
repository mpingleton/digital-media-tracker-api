const { initDatabase, syncModels, closeDatabase } = require('./index.js');

const main = async () => {
    await initDatabase();
    await syncModels();
    await closeDatabase();
};

main()
    .then(() => {
        console.log('Database synchronized successfully.');
        process.exit(0);
    })
    .catch((err) => {
        console.log('Error: ' + err);
        process.exit(1);
    });
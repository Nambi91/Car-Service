const db = require("../models");

module.exports = () => {
    // Test DB
    db.sequelize
        .authenticate()
        .then(() => console.log("Database connected..."))
        .catch((err) => console.log("Error: " + err));

    // Synchronize DB
    db.sequelize
        .sync({
            alter: true,
        })
        .then(() => {
            console.log("Drop and Resync with { alter: true }");
        });
};

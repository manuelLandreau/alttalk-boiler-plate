let Sequelize = require('sequelize');

let sequelize = new Sequelize('mysql://root@localhost:3306/alttalk');

sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

export default sequelize;
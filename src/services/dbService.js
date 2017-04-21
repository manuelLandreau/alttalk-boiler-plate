let Sequelize = require('sequelize');

let sequelize = new Sequelize('mysql://root:root@172.17.0.2:3306/alttalk');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        sequelize
            .sync({ force: true })
            .then(e => console.log('db synchronized.'))
            .catch(e => console.log('An error occurred while creating the table:', e));
    })
    .catch(err => console.log('Unable to connect to the database:', err));

export default sequelize;
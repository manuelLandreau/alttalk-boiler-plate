import sequelize from '../services/dbService.js';
import Sequelize from 'sequelize';

let Answer = sequelize.define('answer', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reported: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

export default Answer;

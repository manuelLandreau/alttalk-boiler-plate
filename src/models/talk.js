import sequelize from '../services/dbService.js';
import Sequelize from 'sequelize';
import Answer from './answer';

let Talk = sequelize.define('talk', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    views: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    answerNb: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    reported: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

// Relations
Talk.hasMany(Answer);

export default Talk;

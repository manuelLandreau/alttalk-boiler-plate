import sequelize from '../services/dbService.js';
import Sequelize from 'sequelize';
import Talk from './talk';
import Answer from './answer';

let User = sequelize.define('user', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answerNb: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    talkNb: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

// Relations
Talk.belongsTo(User);
User.hasMany(Talk);
User.hasMany(Answer);

// import {times} from 'lodash';
// import Faker from 'faker';
// import uuid from 'uuid/v4';
// sequelize.sync({ force: true }).then(()=> {
//     times(10, ()=> {
//         return User.create({
//             _id: uuid(),
//             username: Faker.name.firstName(),
//             email: Faker.internet.email()
//         }).then(user => times(10, ()=> {
//             return user.createTalk({
//                 _id: uuid(),
//                 text: 'here is a talk !'
//             }).then(talk => times(10, ()=> {
//                 return sequelize.models.answer.create({
//                     _id: uuid(),
//                     text: 'here is an answer !',
//                     userId: user.get('id'),
//                     talkId: talk.get('id')
//                 });
//             }));
//         }));
//     });
// });

export default User;
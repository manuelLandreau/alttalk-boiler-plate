import sequelize from '../services/dbService.js';
import Talk from './talk.js';
import User from './user.js';
import uuid from 'uuid/v4';
import {incrementTalksNb} from './userDao';

/**
 * Create new Talk
 * @param data
 * @return Promise<Talk>
 */
export function create(data) {
    return new Promise((resolve, reject) => {
        resolve(
            User.find({where: {_id: data.userId}})
                .then(user => {
                    incrementTalksNb(user);
                    return user.createTalk({
                            _id: uuid(),
                            text: data.talk
                        })
                    }
                )
        );
    });
}

/**
 * Find the best match for a Talk to answer (cf. Specs)
 * @return Promise<Talk>
 */
export function findTheBest() {
    return new Promise((resolve, reject) => {
        resolve(Talk.find({
            order: [
                sequelize.fn('min', sequelize.col('answerNb')),
                sequelize.fn('max', sequelize.col('ratio'))
            ]
        }));
    });
}

/**
 * Find one
 * @param param
 * @return Promise<Talk>
 */
export function findOneBy(param) {
    return new Promise((resolve, reject) => {
        resolve(Talk.findOne(param));
    });
}

/**
 * Find all
 * @param param
 * @return Promise<[Talk]>
 */
export function findAllBy(param) {
    return new Promise((resolve, reject) => {
        resolve(Talk.findAll(param));
    });
}
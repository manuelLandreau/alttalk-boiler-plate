import User from './user.js';
import uuid from 'uuid/v4';

export function create(email, username, password) {
    return new Promise((resolve, reject) => {
        resolve(User.create({
            _id: uuid(),
            email: email,
            username: username,
            password: password
        }));
    });
}

export function findOneBy(param) {
    return new Promise((resolve, reject) => {
        resolve(User.findOne(param));
    });
}

export function findAllBy(param) {
    return new Promise((resolve, reject) => {
        resolve(User.findAll(param));
    });
}

export function incrementTalksNb(user) {
    user.updateAttributes({talkNb: user.get('talkNb') + 1});
}
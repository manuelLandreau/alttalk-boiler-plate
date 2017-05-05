import bcrypt from 'bcryptjs';
import User from '../models/user';

const saltRounds = 10;

export function createUser(user, success, error) {
    console.log('Check if user exists');
    console.log(user);
    return new Promise((resolve, reject) => {
        getUserByMailAndName(user.email, user.username).then((data) => {
            if (data === null) {
                return bcrypt.hash(user.password, 10, (err, hash) => {
                    if (!err)
                        return User.create({email: user.email, username: user.username, password: hash})
                            .then((data) => {
                                console.log('Persist user');
                                resolve();
                            })
                            .catch(error => {
                                console.log("ERROR:", error.message || error);
                                reject();
                            });
                    console.log("Bcrypt error:", err);
                    reject();
                });
            } else {
                console.log('User allready exists');
                reject();
            }
        })
    });
}

export function checkPassword(username, password) {
    console.log('Checking passwords');
    return new Promise((resolve, reject) =>
        getUserByMailAndName(username)
            .then(data => bcrypt.compare(password, data.dataValues.password, (err, res) => {
                    if (err) reject(err);
                    console.log('Passwords match');
                    resolve(true)
                }))
            .catch(err => reject(err))
    );
}

export function getUserByMailAndName(username) {
    console.log(username, 'get user by username');
    return new Promise((resolve, reject) =>
        User.findOne({
                where: {
                    //email: email,
                    username: username
                }
            })
            .then((data) => resolve(data))
            .catch(err => reject(err))
    );
}

export function getUserById(id) {
    console.log('get user by id');
    return new Promise((resolve, reject) =>
        User.findOne({where: {id: id}})
            .then((data) => resolve(data)
            .catch(err => reject(err)))
    )
}

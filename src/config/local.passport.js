import passport from 'passport';
import LocalStrategy from 'passport-local';
import {getUserByMailAndName, checkPassword, getUserById}  from '../services/authService';

passport.use('local', new LocalStrategy(
    (username, password, cb) => {
        getUserByMailAndName(username).then((data) => {
            (data === null) ?
                cb(null, false, {message: 'Incorrect username.'}) :
                checkPassword(password, data.dataValues.password).then((checked) => {
                    if (!checked)
                        return cb(null, false, {message: 'Incorrect password'});
                    return cb(null, data.dataValues);
                }).catch(err => {
                    console.log('Incorrect password:', err);
                    cb(err);
                });
        }).catch(err => {
            console.log('Cannot fetch user error:', err);
            cb(err);
        });
    }));

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser((id, cb) => {
    getUserById(id)
        .then((user) => cb(null, user))
        .catch((err) => {
            console.log('Passport error', err);
            cb(err);
        });
});

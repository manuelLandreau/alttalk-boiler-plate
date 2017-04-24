import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import '../config/local.passport';
import fs from 'fs';
import {createUser} from '../services/authService';

let auth = express();
let cert = fs.readFileSync('./src/config/jwtRS256.key').toString();

auth.post('/login',
    passport.authenticate('local', {session: false}),
    (req, res) => jwt.sign({user: req.user}, cert, {algorithm: 'RS256'}, (err, token) => !err ? res.send(token) : console.log(err))
);

auth.post('/register', (req, res) => {
    console.log(req.body);
    // TODO: better error handling
    createUser(req.body).then(() => res.send('Registration ok')).catch(() => console.log('Registration error'));
});

export default auth;
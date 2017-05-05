import express from 'express';
import jwtMiddleware from '../middlewares/jwtMiddleware';
import omit from 'lodash/omit';
import {findOneBy} from '../models/userDao.js';

let user = express();

user.get('/me', jwtMiddleware,
    (req, res) => {
            const _user = omit(req.currentUser.user, ['password']);
            res.json(_user);
        }
);

user.get('/me/ratio', jwtMiddleware,
    (req, res) => {
        findOneBy({_id: req.currentUser.user._id})
            .then(user => {
                const ratio = user.talkNb / 100 * user.answerNb;
                res.json(ratio);
            }).catch(err => res.status(500));
    }
);

export default user;
import express from 'express';
import jwtMiddleware from '../middlewares/jwtMiddleware';
import {create} from '../models/talkDao';
import {findAll} from '../models/talkDao';

let talk = express();

talk.post('/add', jwtMiddleware,
    (req, res) => {
        create(req.body)
            .then(talk => res.json(talk))
            .catch(err => console.log(err));
    }
);

talk.get('/all',
    (req, res) => {
        findAll()
            .then(talks => res.json(talks))
            .catch(err => console.log(err));
    }
);

export default talk;
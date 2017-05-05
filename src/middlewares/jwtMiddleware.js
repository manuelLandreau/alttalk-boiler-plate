import jwt from 'jsonwebtoken';
import fs from 'fs';

let cert = fs.readFileSync('./src/config/jwtRS256.key.pub');

export default (req, res, next) => {
    if (!req.headers.authorization) res.status(401);
    jwt.verify(req.headers.authorization,
        cert,
        {algorithms: ['RS256']},
        function (err, decoded) {
            console.log('Auth middleware');
            if (!err) {
                req.currentUser = decoded;
                next();
            } else {
                res.status(500);
            }
        }
    );
};
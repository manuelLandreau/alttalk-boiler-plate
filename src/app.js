import express from 'express';
import graphqlHTTP from 'express-graphql';
import passport from 'passport';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authController from './controllers/authController';
import userController from './controllers/userController';
import talkController from './controllers/talkController';
import jwtMiddleware from './middlewares/jwtMiddleware';
import schema from './data/schema'
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.use(passport.initialize());
app.use('/graphql', graphqlHTTP(req => ({
    schema: schema,
    graphiql: true,
    rootValue: root
})));

app.use('/auth', authController);

app.use('/users', jwtMiddleware, userController);
app.use('/talks', talkController);

app.get('/public', (req, res) => {
        res.json({success: 'get /index!'});
    }
);

let server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('GraphQL listening at http://%s:%s', host, port);
});
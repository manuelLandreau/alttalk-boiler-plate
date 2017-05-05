import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import createBrowserHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux'
import reducers from './reducers';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(middleware, promise(), thunk, logger()))
);
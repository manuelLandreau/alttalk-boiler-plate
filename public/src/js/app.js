import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import Layout from './routes/Layout';
import {store} from './store';
import './index.scss';
import AddTalk from './routes/AddTalk';
import Home from './routes/Home';
import NoMatch from './routes/NoMatch';
import {history} from './store';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const app = document.getElementById('app');

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/add" component={AddTalk}/>
                <Route component={NoMatch}/>
                </Switch>
            </Layout>
        </ConnectedRouter>
    </Provider>
    , app
);

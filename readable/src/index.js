import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import promise from 'redux-promise';
// import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import './style/index.css'
import registerServiceWorker from './registerServiceWorker';

import PostNew from './components/post_new'
import MainIndex from './components/main_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    // <Provider store={createStore(reducers, {}, applyMiddleware(promiseMiddleware()))}>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path='/posts/new' render={() => (
                    <PostNew />
                )} />
                <Route path='/:category/:post_id' render={() => (
                    <MainIndex />
                )} />
                <Route path='/:category' render={() => (
                    <MainIndex />
                )} />
                <Route exact path='/' render={() => (
                    <MainIndex />
                )} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

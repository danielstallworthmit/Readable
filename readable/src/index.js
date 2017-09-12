import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';
// import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import Post from './components/post'
import MainIndex from './components/main_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    // <Provider store={createStore(reducers, {}, applyMiddleware(promiseMiddleware()))}>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <MainIndex />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

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

import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    // <Provider store={createStore(reducers, {}, applyMiddleware(promiseMiddleware()))}>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

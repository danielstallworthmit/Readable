import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import Post from './components/post'
import MainIndex from './components/main_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path='/:category/:post_id' component={Post} />
                <Route path='/:category' component={MainIndex} />
                <Route path='/' component={MainIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

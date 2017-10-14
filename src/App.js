import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostNew from './components/post_new';
import CommentNew from './components/comment_new';
import MainIndex from './components/main_index';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/posts/new' component={PostNew} />
                    <Route path='/comments/new' component={CommentNew} />
                    <Route path='/:category/:post_id' component={MainIndex} />
                    <Route path='/:category' component={MainIndex} />
                    <Route path='/' component={MainIndex} />
                </Switch>
            </div>
        )
    }
}

export default App;

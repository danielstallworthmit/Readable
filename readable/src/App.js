import React from 'react';
import { Route, Switch } from 'react-router-dom'

import PostNew from './components/post_new'
import MainIndex from './components/main_index'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/posts/new' component={PostNew} />
                    <Route path='/:category/:post_id' component={MainIndex} />
                    <Route path='/:category' component={MainIndex} />
                    <Route path='/' component={MainIndex} />
                </Switch>
            </div>
        )
    }
}

export default App;


// ReactDOM.render(
//     // <Provider store={createStore(reducers, {}, applyMiddleware(promiseMiddleware()))}>
//     <Provider store={createStoreWithMiddleware(reducers)}>
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path='/posts/new' component={PostNew} />
//                 <Route path='/:category/:post_id' component={MainIndex} />
//                 <Route path='/:category' component={MainIndex} />
//                 <Route exact path='/' component={MainIndex} />
//             </Switch>
//         </BrowserRouter>
//     </Provider>
//     , document.getElementById('root'));
// registerServiceWorker();

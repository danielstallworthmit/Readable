import React from 'react';
import _ from 'lodash';

import Voter from './voter';

export default (props) => {
    return (
        <ul className="postList">
            { _.map(props.posts, post => { return (
                <li className="postItem" key={post.id}>
                    <Voter votes={post.voteScore} />
                    <div className="post">
                        <h3>
                            {post.title}
                        </h3>
                        <div>
                            <p>By {post.author} on <span> {
                                new Date(post.timestamp).getMonth() + '/' +
                                new Date(post.timestamp).getDate() + '/' +
                                new Date(post.timestamp).getFullYear()
                                } </span> </p>
                            <p> {_.size(post.comments)} Comments </p>
                        </div>
                    </div>
                </li> ) } )  
            }
        </ul>
    )
}
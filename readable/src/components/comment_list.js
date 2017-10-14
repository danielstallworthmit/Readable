import React from 'react';
import { connect } from 'react-redux';
import { voteComment } from '../actions';
import _ from 'lodash';

import Voter from './voter';

class CommentList extends React.Component {
    render() {
        const { post, voteComment } = this.props;
        return (
            <ul className="entityList">
                {_.map(post.comments, comment => (
                    <li className="entityItem" key={comment.id}>
                        <div className="commentBlock">
                            <Voter type="comment" entity={comment} />
                            <div className="details">
                                <div className="commentDetail">
                                    <h3>
                                        {comment.title}
                                    </h3> 
                                    <p className="commentBody">
                                        {comment.body}
                                    </p>
                                </div>
                                <div>
                                    <p>By <span className="author"> {comment.author} </span> on <span> {
                                        new Date(comment.timestamp).getMonth() + 1 + '/' +
                                        new Date(comment.timestamp).getDate() + '/' +
                                        new Date(comment.timestamp).getFullYear()
                                        } </span> </p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}


export default connect(null, { voteComment })(CommentList)
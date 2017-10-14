import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortPosts } from '../actions';

import Voter from './voter';
import CommentList from './comment_list';
import EditDelete from './edit_delete';

class PostList extends React.Component {
    static PropTypes = {
        posts: PropTypes.object,
        sortPosts: PropTypes.func
    }

    handleChange = (event) => {
        // Sort posts by selector
        if (event.target.value !== "none") {
            this.props.sortPosts(event.target.value);
        }
        event.target.value = "none";
    }

    postRender() {
        this.props.fetchPost(this.props.match.params.post_id);
    }
    
    render() {
        const { posts, match } = this.props;
        return (
            <ul className="entityList">
                <select className="sorter" onClick={this.handleChange} defaultValue="none">
                    <option value="none" disabled>Sort Posts ...</option>
                    <option value="timestamp">By Last Posted</option>
                    <option value="voteScore">By High Score</option>
                </select>
                <Link to={`/posts/new`}>
                    <button id="addButton">Add a Post!</button>
                </Link>
                { _.map(posts, post => { return (
                    <li className="entityItem" key={post.id}>
                        <Voter type="post" entity={post} />
                        <div className="details">
                            { match.params.hasOwnProperty("post_id") ?
                                <div className="postDetail">
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <p className="postBody">
                                        {post.body}
                                    </p>
                                </div>
                                :
                                <Link to={`/${post.category}/${post.id}`} onClick={this.postRender}>
                                    <h3>
                                        {post.title}
                                    </h3>
                                </Link>
                            }
                            <div>
                                <p>By <span className="author"> {post.author} </span> on <span> {
                                    new Date(post.timestamp).getMonth() + 1 + '/' +
                                    new Date(post.timestamp).getDate() + '/' +
                                    new Date(post.timestamp).getFullYear()
                                    } </span> </p>
                                <p> {_.size(post.comments)} Comments </p>
                            </div>
                            <EditDelete post={post} />
                        </div>
                        { match.params.hasOwnProperty("post_id") ?
                            [<Link to={`/comments/new`} id="commentButton">
                                <button id="addButton">Add a Comment!</button>
                            </Link>,
                            <CommentList post={post} /> ]
                            :
                            null
                        }
                    </li> ) } )  
                }
            </ul>
        )
    }
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default withRouter(connect(mapStateToProps, { sortPosts })(PostList));
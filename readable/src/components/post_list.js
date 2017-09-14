import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { sortPosts } from '../actions';

import Voter from './voter';

class PostList extends React.Component {
    static PropTypes = {
        posts: PropTypes.object,
        sortPosts: PropTypes.func
    }

    handleChange = (event) => {
        console.log(event.target.value)
        if (event.target.value !== "none") {
            this.props.sortPosts(event.target.value);
        }
        event.target.value = "none"
    }
    
    render() {
        const { posts, sortPosts } = this.props;
        console.log(posts)
        return (
            <ul className="postList">
                <select className="sorter" onClick={this.handleChange} defaultValue="none">
                    <option value="none" disabled>Sort Posts ...</option>
                    <option value="timestamp">By Last Posted</option>
                    <option value="voteScore">By High Score</option>
                </select>
                { _.map(posts, post => { return (
                    <li className="postItem" key={post.id}>
                        <Voter post={post} />
                        <div className="post">
                            <h3>
                                {post.title}
                            </h3>
                            <div>
                                <p>By <span className="author"> {post.author} </span> on <span> {
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
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default connect(mapStateToProps, { sortPosts })(PostList);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchComments } from '../actions';
import _ from 'lodash';

class MainIndex extends React.Component {
    componentWillMount() {
        this.props.fetchPosts()
        setTimeout(() => {
            console.log(this.props)
            _.map(this.props.posts, (post) => this.props.fetchComments(post.id) )
        }, 500)
        // console.log(this.props)
    }

    // componentDidMount() {
    //     this.updatePostsComments(this.props.posts);
    // }

    // updatePostsComments(posts) {
    //     _.map(posts, (post) => this.props.fetchComments(post.id) )
    // }

    render() {
        const { posts } = this.props;
        console.log(posts);
        // this.updatePostsComments(posts);
        return (
            <div>
                {_.map(posts, post => { return (
                    <li key={post.id}> 
                        {post.title} 
                    </li> ) } )  }
            </div>
        )
    }
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts, fetchComments })(MainIndex);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchComments } from '../actions';
import _ from 'lodash';

import Header from './header';
import Categories from './category_list';
import PostList from './post_list';

class MainIndex extends React.Component {
    componentWillMount() {
        this.props.fetchPosts()
        setTimeout(() => {
            console.log(this.props)
            _.map(this.props.posts, (post) => this.props.fetchComments(post.id) )
        }, 500)
        // console.log(this.props)
    }

    // updatePostsComments(posts) {
    //     _.map(posts, (post) => this.props.fetchComments(post.id) )
    // }

    render() {
        const { posts } = this.props;
        const cats = this.props.hasOwnProperty("match") ? [this.props.match.params.category] : _.uniq(_.map(posts, "category"))
        console.log(cats)
        console.log(posts);
        // this.updatePostsComments(posts);
        return (
            <div>
                <Header />
                <div id="mainContent">
                    <Categories cats={cats} />
                    <PostList posts={_.filter(posts, p => _.includes(cats, p.category) )} />
                </div>
            </div>
        )
    }
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts, fetchComments })(MainIndex);
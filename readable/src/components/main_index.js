import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts, fetchComments, fetchCategoryPosts, fetchPost } from '../actions';
import _ from 'lodash';

import Header from './header';
import Categories from './category_list';
import PostList from './post_list';

class MainIndex extends React.Component {
    componentDidMount() {
        const cb = () => _.map(this.props.posts, (post) => this.props.fetchComments(post.id) )
        if (this.props.match.params.hasOwnProperty("post_id")) {
            this.props.fetchPost(this.props.match.params.post_id)
        } else if (this.props.match.params.hasOwnProperty("category")) {
            this.props.fetchCategoryPosts(this.props.match.params.category)
        } else {
            this.props.fetchPosts()
        }
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
        // console.log(this.props.location.pathname)
        // const cats = this.props.hasOwnProperty("match") ? [this.props.match.params.category] : _.uniq(_.map(posts, "category"))
        // console.log(cats)
        console.log(posts);
        // this.updatePostsComments(posts);
        return (
            <div>
                <Header />
                <div id="mainContent">
                    <Categories cats={_.uniq(_.map(posts, "category"))} />
                    <PostList />
                </div>
            </div>
        )
    }
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default withRouter(connect(mapStateToProps, { fetchPosts, fetchComments, fetchCategoryPosts, fetchPost })(MainIndex));
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts  } from '../actions';
import _ from 'lodash';

class MainIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props)
    }

    render() {
        const { posts } = this.props;
        console.log(posts)
        return (
            <div>
                {_.map(posts, post => { return ( <li key={post.id}> {post.title} </li> ) } )  }
            </div>
        )
    }
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(MainIndex);
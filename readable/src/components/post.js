import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts  } from '../actions';
import _ from 'lodash';

class MainIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;
        return (
            _.map(posts, post => post)
        )
    }
}

function mapStateToProps( { posts } ) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(MainIndex);
import React from 'react';
import _ from 'lodash';

class MainIndex extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            _.map(posts, post => post)
        )
    }
}

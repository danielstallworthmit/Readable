import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Header extends React.Component {
    postRender() {
        this.props.fetchPosts();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="header">
                {match.params.hasOwnProperty("category") ? 
                    <Link to={'/'} onClick={this.postRender}>
                        <h1>READABLE</h1>
                    </Link> :
                    <h1>READABLE</h1>
                }
            </div>
        )
    }
}  

export default withRouter(connect(null, { fetchPosts })(Header));
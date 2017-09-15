import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'; 

class PostNew extends React.Component {
    render() {
        return (
            <h1>Hi</h1>
        )
    }
}

export default withRouter(connect(null, { createPost })(PostNew));
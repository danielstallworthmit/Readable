import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { preUpdatePost, removePost, fetchPosts } from '../actions';

class EditDelete extends React.Component {
    editHandler() {
        // Make sure to specify an edit is being made in the props from redux
        this.props.preUpdatePost(this.props.post);
        this.props.history.push('/posts/new');
    }

    deleteHandler() {
        this.props.removePost(this.props.post, () => {
            this.props.fetchPosts();
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="editDeleteButtons">
                <button className="addButton" onClick={this.editHandler.bind(this)}>Edit</button>
                <button className="deleteButton" onClick={this.deleteHandler.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default withRouter(connect(null, { preUpdatePost, removePost, fetchPosts })(EditDelete));

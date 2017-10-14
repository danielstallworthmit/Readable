import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { preUpdateComment, removeComment } from '../actions';

class EditDeleteComment extends React.Component {
    editHandler() {
        // Make sure to specify an edit is being made in the props from redux
        this.props.preUpdateComment(this.props.comment);
        this.props.history.push('/comments/new');
    }

    deleteHandler() {
        this.props.removeComment(this.props.comment, () => {
            this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`);
        });
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

export default withRouter(connect(null, { preUpdateComment, removeComment })(EditDeleteComment));

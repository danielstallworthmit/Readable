import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { preUpdateComment, removeComment } from '../actions';

class EditDeleteComment extends React.Component {
    editHandler() {
        // console.log(this.props)
        this.props.preUpdateComment(this.props.comment);
        this.props.history.push('/comments/new');
    }

    deleteHandler() {
        console.log(this.props)
        this.props.removeComment(this.props.comment, () => {
            // this.props.fetchPosts();
            this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`);
        })
        // setTimeout(() => {
        //     this.props.fetchPosts();
        // }, 500)
        // this.props.history.push('/');
    }

    render() {
        // const { post } = this.props;
        return (
            <div className="editDeleteButtons">
                <button className="addButton" onClick={this.editHandler.bind(this)}>Edit</button>
                <button className="deleteButton" onClick={this.deleteHandler.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default withRouter(connect(null, { preUpdateComment, removeComment })(EditDeleteComment));

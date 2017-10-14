import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { preUpdatePost, removePost, fetchPosts } from '../actions';

class EditDelete extends React.Component {
    editHandler() {
        // console.log(this.props)
        this.props.preUpdatePost(this.props.post);
        this.props.history.push('/posts/new');
    }

    deleteHandler() {
        console.log(this.props)
        this.props.removePost(this.props.post, () => {
            this.props.fetchPosts();
        })
        // setTimeout(() => {
        //     this.props.fetchPosts();
        // }, 500)
        this.props.history.push('/');
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

export default withRouter(connect(null, { preUpdatePost, removePost, fetchPosts })(EditDelete));

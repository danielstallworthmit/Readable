import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createComment, updateComment } from '../actions'; 
import _ from 'lodash';

class CommentNew extends React.Component {
    componentDidMount() {
        // When making an edit instead of creating a new comment populate with current comment values
        this.props.initialize(this.props.comment);
    }
    renderField(field) {
        const { meta: { touched, error } } = field;
        return (
            <div className="formInput">
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === 'text' ?
                    <input type='text' {...field.input} />
                    :
                    <textarea {...field.input} />
                }
                <div className="errorMessage">
                    {touched ? error : ''}    
                </div>
            </div>
        )
    }

    onSubmit(entity) {
        // Need to save comment with parentID. 
        // If editing comment take the current id as well to know what comment you need to edit
        const parentId = _.keys(this.props.post)[0];
        const commentPost = this.props.post[parentId];
        entity.parentId = parentId;
        if (this.props.comment) {
            entity.id = this.props.comment.id;
            this.props.updateComment(entity, () => {
                this.props.history.push(`/${commentPost.category}/${commentPost.id}`);
            })
        } else {
            this.props.createComment(entity, () => {
                this.props.history.push(`/${commentPost.category}/${commentPost.id}`);
            })
        }
    } 

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Author"
                    type="text"
                    name="author"
                    component={this.renderField}
                />
                <Field 
                    label="Body"
                    type="textarea"
                    name="body"
                    component={this.renderField}
                />
                <button className="submitButton" type="submit">Submit</button>
                <Link to='/'><p className="cancelButton">Back to Home</p></Link>
            </form>
        )
    }
}

const validate = (vals) => {
    const errors = {};
    if (!vals.author) {
        errors.author = "Please enter your name."
    }
    if (!vals.body) {
        errors.body = "Please enter some text."
    }
    return errors;
}

function mapStateToProps( ret ) {
    if (ret.posts.comment) {
        return { comment: ret.posts.comment,
                 post: ret.posts.post};
    } else {
        return { post: ret.posts }
    }
}

export default reduxForm({
    validate,
    form: 'CommentNewForm'
})(
    withRouter(connect(mapStateToProps, { createComment, updateComment })(CommentNew))
)
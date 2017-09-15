import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'; 

class PostNew extends React.Component {
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
        console.log(entity);
        this.props.createPost(entity, () => {
            this.props.history.push(`/${entity.category}/${entity.id}`);
        })
    } 
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    type="text"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Author"
                    type="text"
                    name="author"
                    component={this.renderField}
                />
                <Field 
                    label="Category"
                    type="text"
                    name="category"
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
    if (!vals.title) {
        errors.title = "Please enter a title."
    }
    if (!vals.category) {
        errors.category = "Please enter a category."
    }
    if (!vals.author) {
        errors.author = "Please enter your name."
    }
    if (!vals.body) {
        errors.body = "Please enter some text."
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    withRouter(connect(null, { createPost })(PostNew))
)
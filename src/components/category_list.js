import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategoryPosts } from '../actions';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
    categoryRender() {
        // Get the posts for the category on click
        this.props.fetchCategoryPosts(this.props.match.params.category)
    }

    render() {
        // Get list of categories and link to get the posts for that category
        return (
            <ul className="categoryList">
                   { this.props.cats.map(cat => (
                       <Link key={cat} to={`/${cat}`} onClick={this.categoryRender}>
                            <li>
                                {cat}
                            </li>
                        </Link>
                    ))
                   }
            </ul>
        )
    }
}

export default withRouter(connect(null, { fetchCategoryPosts })(CategoryList));
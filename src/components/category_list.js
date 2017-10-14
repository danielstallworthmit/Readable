import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategoryPosts } from '../actions';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
    categoryRender() {
        this.props.fetchCategoryPosts(this.props.match.params.category)
    }

    render() {
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
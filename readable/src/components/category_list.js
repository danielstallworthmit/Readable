import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <ul className="categoryList">
               { props.cats.map(cat => (
                   <Link to={`/${cat}`}>
                        <li key={cat}>
                            {cat}
                        </li>
                    </Link>
                ))
               }
        </ul>
    )
}
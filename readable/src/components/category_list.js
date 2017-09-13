import React from 'react';

export default (props) => {
    return (
        <ul className="categoryList">
               { props.cats.map(cat => (
                    <li key={cat}>
                        {cat}
                    </li>
                ))
               }
        </ul>
    )
}
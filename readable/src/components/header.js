import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <Link to={'/'}>
                <h1>READABLE</h1>
            </Link>
        </div>
    )
}  
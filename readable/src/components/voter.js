import React from 'react';

export default (props) => {
    return (
        <div className="voteCell">
            <img className="upClick" src="http://www.freeiconspng.com/uploads/up-arrow-png-17.png" alt="voteUp" />
            <span className="votes"> {props.votes} </span>
            <img className="downClick" src="https://openclipart.org/image/2400px/svg_to_png/165169/arrowdownred.png" alt="voteUp" />
        </div>
    )
}
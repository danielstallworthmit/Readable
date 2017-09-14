import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { votePost } from '../actions';

class Voter extends React.Component {
    upClick = () => {
        this.props.votePost(this.props.post, "upVote")
    }

    downClick = () => {
        this.props.votePost(this.props.post, "downVote")
    }

    render() {
        const { post, votePost } = this.props;
        return (
            <div className="voteCell">
                <img className="upClick" onClick={this.upClick} src="http://www.freeiconspng.com/uploads/up-arrow-png-17.png" alt="voteUp" />
                <span className="votes"> {post.voteScore} </span>
                <img className="downClick" onClick={this.downClick} src="https://openclipart.org/image/2400px/svg_to_png/165169/arrowdownred.png" alt="voteDown" />
            </div>
        )
    }
}

export default connect(null, { votePost })(Voter);

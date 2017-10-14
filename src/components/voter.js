import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { votePost, voteComment } from '../actions';

class Voter extends React.Component {
    upClick = () => {
        if (this.props.type === "post"){
            this.props.votePost(this.props.entity, "upVote")
        } else if (this.props.type === "comment"){
            this.props.voteComment(this.props.entity, "upVote")
        }
    }

    downClick = () => {
        if (this.props.type === "post"){
            this.props.votePost(this.props.entity, "downVote")
        } else if (this.props.type === "comment"){
            this.props.voteComment(this.props.entity, "downVote")
        }
    }

    render() {
        const { entity, votePost } = this.props;
        return (
            <div className="voteCell">
                <img className="upClick" onClick={this.upClick} src="http://www.freeiconspng.com/uploads/up-arrow-png-17.png" alt="voteUp" />
                <span className="votes"> {entity.voteScore} </span>
                <img className="downClick" onClick={this.downClick} src="https://openclipart.org/image/2400px/svg_to_png/165169/arrowdownred.png" alt="voteDown" />
            </div>
        )
    }
}

export default connect(null, { votePost, voteComment })(Voter);

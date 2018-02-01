import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


class CommentsList extends Component {
 handleId = (props) => {
}
render() {
    const { comments } = this.props; // is an array of objects
    
    const allComment = comments.map((comment) => {
        return (
            <div>
          <li id={comment.id}>
            {comment.comment}
          </li>
          </div>
      )
    });
    
    console.log("id....", id)
    return (
      <div>
        <ul>
          {allComment}
        </ul>
      </div>
    )
  }
}

export default CommentsList;

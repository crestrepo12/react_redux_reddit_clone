import React, { Component } from "react";
import { connect } from "react-redux";
import CommentsList from "../components/comment/commentsList";
import NewComment from "../components/comment/newComment"

class CommentsContainer extends React.Component {
    addComment = (newComment) => {
        //getting dispatch and comments from globel store we are declaring it now not grabbing it from a diff file
      const { dispatch, comments } = this.props;

      const {id} = comments.length + 1
      const commentObj = {
        id: comments.toString(),
        comment: newComment
      }
      dispatch({
        type: "ADD_COMMENT",
        comment: commentObj
        // id: links.toString(),
        // title: title,
        // url: url
      })
    }
  render() {
    const { comments } = this.props;

    // order of return is display on page
    return (
      <div>
        <NewComment addComment={this.addComment} /> 
        <CommentsList comments={comments} />
      </div>
    );
  }
}

export default connect(state => state)(CommentsContainer);

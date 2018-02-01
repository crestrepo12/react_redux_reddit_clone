import React, { Component } from "react";
import CommentsContainer from "../../containers/commentsContainer"


class SingleLink extends Component {

  render() {
    const { singleLink } = this.props;
    return (
      <div>
        <h3>{singleLink.title}</h3>
        <a href={singleLink.url} target="_blank">
          <p>Go to Site</p>
        </a>
        {/* importing container here to link into this page*/}
        <CommentsContainer />
      </div>
    );
  }
}

export default SingleLink;

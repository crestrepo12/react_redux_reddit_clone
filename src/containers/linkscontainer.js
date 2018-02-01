import React, { Component } from "react";
import { connect } from "react-redux";
import Links from "../components/links/links";

class LinksContainer extends React.Component {
  addLink = (title, url) => {
    const { dispatch, links } = this.props;

    const id = links.length + 1;

    const link = {
      id: links.toString(),
      title: title,
      url: url
    }
    dispatch({
      type: "ADD_LINK",
      link: link
      // id: links.toString(),
      // title: title,
      // url: url
    })
  }
  render() {
    const { links } = this.props;

    return <Links links={links}  addLink={this.addLink}/>;
  }
}

export default connect(state => state)(LinksContainer);

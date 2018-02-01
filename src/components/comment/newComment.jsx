import React from "react";

class NewComment extends React.Component {
    links =this.props
  constructor() {
    super();

    this.state = {
        id: '',
        comment: ""
    };
  }

  onChange = e => {
    this.setState({
        id: this.state.id,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { comment } = this.state;
    this.props.addComment(comment);
    this.setState({
      comment: ""
    });
  };

  render() {
    const { comment } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Add Comment:
            <input
              name="comment"
              type="text"
              value={comment}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewComment;

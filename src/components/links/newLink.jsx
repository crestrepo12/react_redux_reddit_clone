import React from "react";

class newLink extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      url: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, url } = this.state;
    this.props.addLink(title, url);
    this.setState({ 
        title: "",
        url: ""
    })
  };

  render() {
    const { title, url } = this.state;
    console.log(this.state)
    return (
      <div>
        <h2>New Link</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Title :
            <input name="title" type="text" value={title} onChange={this.onChange} />
          </label>
          <label>
            {" "}
            Url:
            <input name="url" type="text" value={url} onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default newLink;

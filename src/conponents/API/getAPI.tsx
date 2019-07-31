import React, { Component } from "react";

class GetAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      data: []
    };
  }

  componentDidMount() {
    fetch(this.state.url) // + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
  }
}

export default GetAPI;

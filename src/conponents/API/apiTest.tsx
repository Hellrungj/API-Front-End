import React, { Component } from "react";

const API = "https://my-json-server.typicode.com/typicode/demo/posts";
//const DEFAULT_QUERY = "1";

//const API = 'https://hn.algolia.com/api/v1/search?query=';
//const DEFAULT_QUERY = 'redux';

class ApiTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(API) // + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h3>
          Fetched from <a href={API}> JSON API Server </a>
        </h3>
        <ul>
          {data.map(data => (
            <li key={data.id}>
              <h4> ID: {data.id}</h4>
              <h5>Title: {data.title}</h5>
            </li>
          ))}
        </ul>

        <h3>JSON:</h3>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
  }
}

export default ApiTest;

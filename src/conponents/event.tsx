import React, { Component } from "react";
import GetAPI from "./API/getAPI";

class Event extends Component {
  render() {
    return (
      <main className="container">
        <div className="App">
          <h1>Event</h1>
        </div>
        <hr />
        <GetAPI url="https://my-json-server.typicode.com/typicode/demo/posts" />
      </main>
    );
  }
}

export default Event;

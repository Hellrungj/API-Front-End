import React, { Component } from "react";
import ApiTest from "./API/apiTest";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
        <hr />
        <ApiTest />
      </main>
    );
  }
}

export default Main;

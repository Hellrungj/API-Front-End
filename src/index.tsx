import React, { Component } from "react";
import { render } from "react-dom";
import AppRounter from "./appRouter";

import "./styles.css";

class App extends Component {
  render() {
    return <AppRounter />;
  }
}

export default App;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
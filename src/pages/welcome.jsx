import React, { Component } from "react";
import { Navbar } from "src/components/Navbar";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>Welcome</h1>
        </div>
      </div>
    );
  }
}

export default Welcome;

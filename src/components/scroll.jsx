import React, { Component } from "react";

export class Scroller extends Component {
  state = {};
  render() {
    return (
      <a href="#down" className="scroll">
        <div className="scroll-body">
          <div className="scroll-body-point"></div>
        </div>
      </a>
    );
  }
}

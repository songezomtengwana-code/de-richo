import React, { Component } from "react";
import { dericho } from "../api/dericho";
// stylesheet
import "../styles/discography-list.css";

export class DiscographyList extends Component {
  state = {
    api: [dericho],
  };

  toggleView() {
    const body = document.querySelector(".list-body");
    const toggle = document.querySelector('.toggle'); 

    if (body.classList.contains("body-inactive") === true) {
      // expands the list 
      body.classList.add("body-active");
      toggle.innerHTML.replace("span", "div");
      body.classList.remove("body-inactive");
    } else {
      // shortens the list 
      body.classList.remove("body-active");
      toggle.innerHTML.replace("div", "span");
      body.classList.add("body-inactive");
    }
  }

  render() {
    return (
      <div className="list">
        {this.state.api.map((res) => (
          <React.Fragment key={res.tag}>
            {/* // toggler */}
            <div className="toggle" onClick={() => this.toggleView()}>
              <span>more</span>
            </div>
            <div className="list-body body-inactive" key={res.tag}>
              {res.library.map((track) => (
                <div className="list-body-card" key={track.title}>
                  {/* //image */}
                  <div className="list-body-card-image">
                    <span
                      className="image"
                      style={{ backgroundImage: "url(" + track.imgurl + ")" }}
                    ></span>
                  </div>
                  <div className="list-body-card-content">
                    <div className="content-title">{track.title}</div>
                    <span className="content-year">{track.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

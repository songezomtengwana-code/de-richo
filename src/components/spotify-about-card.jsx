import React, { Component } from "react";
import { dericho } from "../api/dericho";

export class SpotifyAboutCard extends Component {
  modalState() {
    const modal = document.querySelector(".modal");

    if (modal.classList.contains("inactive") === true) {
      modal.classList.remove("modal-inactive");

      modal.classList.add("modal-active");
    } else {
      modal.classList.add("modal-inactive");
      modal.classList.remove("modal-active");
    }
  }
  state = {
    api: [dericho],
  };
  render() {
    return (
      // designed by yours truly Songezo Sean Mtengwana @ 21:36 01/10/22
      <div className="spotify" onClick={() => this.modalState()}>
        {this.state.api.map((res) => (
          <div className="spotify-container" key={res.tag}>
            {/* content to be displayed */}
            <div className="spotify-container-content">
              {/* platforms list */}
              <div className="platforms">
                {res.links.map((link) => (
                  <div className="platform" key={link.linkname}>
                    <i className={link.fonticon}></i>
                  </div>
                ))}
              </div>
              {/* monthly listeners */}
              <div className="listeners">
                <div className="listeners-quantity">{res.listeners}</div>
              </div>
              {/* about */}
              <div className="about">
                <p className="about-body">{res.about}</p>
              </div>
            </div>
            {/* image for background density */}
            <div className="spotify-conainer-background">
              <span
                style={{ backgroundImage: "url(./assets/wordsmith/wenge.jpg)" }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

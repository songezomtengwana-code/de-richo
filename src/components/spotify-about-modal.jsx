import React, { Component } from "react";
import { dericho } from "../api/dericho";

export class SpotifyAboutModal extends Component {
  state = {
    api: [dericho],
  };

  render() {
    return (
      <React.Fragment>
        
        {this.state.api.map((res) => (
          <React.Fragment key={res.tag}>
            <header className="modal-header" key="modal">
              {res.gallery.map((src) => (
                // image display conatainer
                <span
                  key={src}
                  className="modal-header-image"
                  style={{ backgroundImage: "url(" + src + ")" }}
                ></span>
              ))}
            </header>
            <div className="modal-content">
              <section className="modal-content-cover"></section>
              <p className="modal-content-about">{res.about}</p>

              <div className="modal-content-listeners">{res.listeners}</div>
              {/* // all platforms */}
              <div className="modal-content-platforms">
                {res.links.map((link) => (
                  <div
                    className="modal-content-platforms-platform"
                    key={link.linkname}
                  >
                    <i className={link.fonticon}></i> <p>{link.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

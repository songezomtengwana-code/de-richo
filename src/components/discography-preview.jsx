import React, { Component } from "react";
import { dericho } from "../api/dericho";

export class DiscoPreview extends Component {
  state = {
    api: [dericho],
    default: "./assets/kos.png",
  };
  render() {
    return (
      <React.Fragment>
        {this.state.api.map((richo) => (
          <div className="preview" key={richo.tag}>
            {richo.library.map((track) => (
              <div className="split" key={track.title}>
                <div
                  className="preview-image"
                  style={{
                    backgroundImage: "url(" + this.state.default + ")",
                  }}
                >
                  <span
                    className="preview-image-src"
                    style={{
                      backgroundImage:
                        "url(" + track.imgurl || this.state.default + ")",
                    }}
                  ></span>
                </div>
                <div className="preview-content">
                  <div className="preview-content-title">{track.title}</div>
                  <section className="preview-content-options">
                    {track.urls.map((source) => (
                      <React.Fragment key={source.url}>
                        <div
                          
                          className={source.iconcolor}
                          id="preview-content-options-option"
                          style={{
                            backgroundImage: "url(" + source.iconimage + ")",
                          }}
                        ></div>
                      </React.Fragment>
                    ))}
                  </section>
                </div>
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }
}
